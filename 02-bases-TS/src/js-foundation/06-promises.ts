import { promises } from 'dns';
import { http } from '../plugins/http-client-plugin';



export const getPokemon = async (id: number | string): Promise<any> => {
    const url = (`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await http.get(url);
    return pokemon;

}



