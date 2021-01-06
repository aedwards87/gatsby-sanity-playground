import React from 'react'
import Fieldset from 'part:@sanity/components/fieldsets/default'
import { FormBuilderInput, withDocument } from 'part:@sanity/form-builder'
import { setIfMissing } from 'part:@sanity/form-builder/patch-event'

class ConditionalContactFields extends React.Component {
  render () {
    const { document, type, value, level, focusPath, onFocus, onBlur, onChange } = this.props
    const firstFieldInput = React.createRef()

    const handleFieldChange = (field, fieldPatchEvent) => {
      // Whenever the field input emits a patch event, we need to make sure to each of the included patches
      // are prefixed with its field name, e.g. going from:
      // {path: [], set: <nextvalue>} to {path: [<fieldName>], set: <nextValue>}
      // and ensure this input's value exists
      onChange(fieldPatchEvent.prefixAll(field.name).prepend(setIfMissing({ _type: type.name })))
    }
    console.log({ type })

    return (
      <Fieldset
        level={level}
        legend={type.title}
        description={type.description}
        isCollapsible={!!type.options && !!type.options.collapsible}
        isCollapsed={!!type.options && !!type.options.collapsed}
      >
        {
          type.fields
            .filter(field => {
              return (
                document.toggleAddress
                  ? !field.name.includes('manual' /* 'location' || 'store' || 'setting' || 'school' || 'area' || 'region' */)
                  : field.name.includes('manual')
              )
            })
            .map((field, i) => (
              // Delegate to the generic FormBuilderInput. It will resolve and insert the actual input component
              // for the given field type
              <FormBuilderInput
                level={level + 1}
                ref={i === 0 ? firstFieldInput : null}
                key={field.name}
                type={field.type}
                value={value && value[field.name]}
                onChange={patchEvent => handleFieldChange(field, patchEvent)}
                path={[field.name]}
                focusPath={focusPath}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            ))}
      </Fieldset>
    )
  }
}

export default withDocument(ConditionalContactFields)
