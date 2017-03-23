import characters from './JSON/characters.json';

export default function filterCharacters(searchText) {
    return characters.filter((character) => {
        const value = searchText.toLowerCase();
        const characterName = character.name.toLowerCase();

        if (characterName.includes(value)) {
            return true;
        }

        return false;
    });
}
