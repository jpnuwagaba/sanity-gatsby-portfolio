export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '633a95c5ab76de2041647873',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fswk199v',
                  apiId: '9e2aab65-3553-4dbd-b490-f6f65c6823f5'
                },
                {
                  buildHookId: '633a95c6ab76de20f6647497',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ent71fgs',
                  apiId: 'db6aa16b-90be-4b41-a92b-b6fc28c85514'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jpnuwagaba/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ent71fgs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
