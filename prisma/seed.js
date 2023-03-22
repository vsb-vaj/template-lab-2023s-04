import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      posts: {
        create: {
          title: 'Check out Prisma with Next.js',
          content: 'https://www.prisma.io/nextjs',
          published: true,
        },
      },
    },
  })
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      posts: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: true,
          },
          {
            title: 'Follow Nexus on Twitter',
            content: 'https://twitter.com/nexusgql',
            published: false,
          },
        ],
      },
    },
  })

  const david = await prisma.user.upsert({
    where: { email: 'david@prisma.io' },
    update: {},
    create: {
      email: 'david@prisma.io',
      name: 'David',
      posts: {
        create: [],
      },
    },
  })

  const emily = await prisma.user.upsert({
    where: { email: 'emily@prisma.io' },
    update: {},
    create: {
      email: 'emily@prisma.io',
      name: 'Emily',
      posts: {
        create: [
          {
            title: 'My journey with Prisma',
            content: 'I started using Prisma a year ago and it has been a great experience.',
            published: true,
          },
          {
            title: 'My thoughts on GraphQL',
            content: 'I recently started learning GraphQL and I have mixed feelings about it.',
            published: false,
          },
          {
            title: 'Why I love React',
            content: 'React is my favorite front-end framework and I use it for all my projects.',
            published: false,
          },
        ],
      },
    },
  })

  const frank = await prisma.user.upsert({
    where: { email: 'frank@prisma.io' },
    update: {},
    create: {
      email: 'frank@prisma.io',
      name: 'Frank',
      posts: {
        create: [
          {
            title: 'My favorite JavaScript libraries',
            content: 'In this post, I share my favorite JavaScript libraries for web development.',
            published: true,
          },
          {
            title: 'How I stay productive as a developer',
            content: 'As a developer, it can be hard to stay productive. In this post, I share my tips and tricks.',
            published: true,
          },
        ],
      },
    },
  })
  
  
  console.log({ alice, bob , frank, david, emily})
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })