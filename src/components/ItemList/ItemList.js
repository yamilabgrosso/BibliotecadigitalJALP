import "./ItemList.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Item } from "../Item/Item"
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index"
import "./ItemList.css"
import { Error500 } from  "../Error 500/Error500"

export const ItemList = () => {
  const [items, setItems] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    const db = getFirestore()
    const ItemCollection = db.collection("libros")
    ItemCollection
    .get()
    .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setIsEmpty(true);
        }
        const data = (querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })))
        setItems(data)
      })
      .catch((error) => <Error500/>);
  }, []);

  return (
    <div className='cardContainer'>
      {isEmpty ? (
        <p>No hay nada aquí</p>
      ) : (
        items.map((book) =>
          <div key= {book.id}>
            <Item 
              bookId={book.id}
              name={book.name}
              picture={book.picture}
              pdf={book.pdf}
            />
          </div>
        ))
      }
    </div >
  )
}
