import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import clientConfig from '../../../../client-config';
// import Serializers from './Serializers';

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    // serializers={Serializers}
    {...clientConfig.sanity}
  />
);

export default PortableText;
