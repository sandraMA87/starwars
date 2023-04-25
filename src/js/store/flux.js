const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
    },
    actions: {

      addFavorito: (uid, name) => {
        const store = getStore();
        const newCharacter = [
          ...store.characters,
          { uid, name, favorite: true },
        ];
        setStore({ characters: newCharacter });

        console.log(store);
      },

      borrarFavorito: (uid, name) => {
        const store = getStore();
        const oldCharacter = store.characters.filter(
          (item) => item.uid !== uid
        );
        setStore({ characters: oldCharacter });
      },
      

      
    },
  };
};

export default getState;
