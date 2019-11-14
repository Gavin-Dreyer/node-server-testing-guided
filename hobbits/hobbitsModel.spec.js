const db = require('../data/dbConfig')

const { insert } = require('./hobbitsModel')

describe('hobbits model', function () {
    describe('insert()', function () {
        beforeEach(async () => {
            await db('hobbits').truncate()
        })

        it('should insert a hobbit', async function () {
            await insert({ name: 'sam' })

            const hobbits = await db('hobbits')

            expect(hobbits).toHaveLength(1)
        })

        it('should insert the provided hobbit', async function () {
            await insert({ name: 'sam' })
            await insert({ name: 'gaffer' })

            const hobbits = await db('hobbits')

            expect(hobbits[0].name).toBe('sam')
            expect(hobbits[1].name).toBe('gaffer')
        })

        it('should insert the provided hobbit', async function () {
            let hobbit = await insert({ name: 'sam' })

            expect(hobbit.name).toBe('sam')
            expect(hobbit.id).toBeDefined()

            hobbit = await insert({ name: 'gaffer' })

            expect(hobbit.name).toBe('gaffer')
            expect(hobbit.id).toBeDefined()
        })
    })
})