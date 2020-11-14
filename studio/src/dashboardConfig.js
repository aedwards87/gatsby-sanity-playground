export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fafe474f582913b327997ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3fu8uv6a',
                  apiId: 'f27c805c-42a9-48e2-9d37-3bd51a4b8a6f'
                },
                {
                  buildHookId: '5fafe474c40d474e5c5727fc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n1ac82mr',
                  apiId: 'd4f92536-d18c-430a-a755-333542b7cc9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aedwards87/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n1ac82mr.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
