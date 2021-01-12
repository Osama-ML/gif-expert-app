import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs Fetch', () => {
    
    test('Debe retornar 10 elementos', async () => {
        
        const gifs = await getGifs('HunterxHunter')
        expect(gifs.length).toBe(10)
    })
    
    test('Debe retornar un arreglo vacio', async () => {
        
        const gifs = await getGifs('')
        expect(gifs).toEqual([])
    })

})
