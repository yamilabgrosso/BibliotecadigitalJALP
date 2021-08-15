import { useParams } from 'react-router'
import { Fragment, useState } from "react"
import { useEffect } from "react"
import { Item } from "../Item/Item"
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index"
import React from 'react';
import "./Categories.css"


export const Categories = () => {

  let { categoryId } = useParams()
  const [categories, setCategories] = useState([]);
  const [emptyCategory, setEmptyCategory] = useState(false)


  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection('libros')
    const cat = itemCollection.where("categoryId", "==", categoryId)
    cat
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setEmptyCategory(true)
        }
        const data = (querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })))
        setCategories(data)
      })
  }, [categoryId]
  )

  return (

    <Fragment>
      { emptyCategory && <h5>Lo siento, aún no tenemos libros en esta categoría</h5>}

      {!emptyCategory &&
        <div className="cardContainer">
          {
            categories.map((book) => (
              <div key={book.id}>
                <Item
                               bookId={book.id}
                               name={book.name}
                               picture={book.picture}
                               pdf={book.pdf}
                />
              </div>
            ))
          }
        </div>
      }
    </Fragment >
  )
}
