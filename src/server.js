import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// This dumps all the data in the database
app.get('/', async (req, res) => {

    const allRecords = await prisma.user.findMany({ include: { posts: true } })

    res.json(allRecords)
})


// Write end points here

export { app };