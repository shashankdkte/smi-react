import React from 'react'
import Book from './Book'

const books = [
  {
    id: 1,
    image: "https://avt.mkklcdnv6temp.com/3/u/1-1583463814.jpg",
    title: "One Piece",
    author:"Oda Eiichiro"
  },
    {
    id: 2,
    image: "https://avt.mkklcdnv6temp.com/30/a/17-1583496340.jpg",
    title: "Solo Levelling",
    author:"Sung-Lag Jang"
  },
      {
    id: 3,
    image: "https://avt.mkklcdnv6temp.com/20/b/16-1583494192.jpg",
    title: "Martial Peak",
    author:"Momo"
  },
        {
    id: 4,
    image: "https://avt.mkklcdnv6temp.com/13/f/16-1583493949.jpg",
    title: "Apothesis",
    author:"Ranzai Studio"
  },
          {
    id: 5,
    image: "https://avt.mkklcdnv6temp.com/48/q/17-1583497020.jpg",
    title: "The Beginning After The End",
    author:"Turtle Me"
  },
            {
    id: 6,
    image: "https://avt.mkklcdnv6temp.com/30/e/13-1583488820.jpg",
    title: "Kimetsu No Yaiba",
    author:"Gotouge Koyoharu"
  },
              {
    id: 7,
    image: "https://avt.mkklcdnv6temp.com/19/y/2-1583466482.jpg",
    title: "Tensei Shitara Sime Datta Ken",
    author:"Kawakami Taiki"
  },
                {
    id: 8,
    image: "https://avt.mkklcdnv6temp.com/7/r/1-1583463967.jpg",
    title: "Mushoku Tensei",
    author:"Rifujin Na Managonte"
  },
                  {
    id: 9,
    image: "https://avt.mkklcdnv6temp.com/23/e/1-1583464609.jpg",
    title: "My Hero Academia",
    author:"Horikoshi Kouhei"
  },
                    {
    id: 10,
    image: "https://avt.mkklcdnv6temp.com/19/x/1-1583464480.jpg",
    title: "Tower of God",
    author:"Siu"
  },
                      {
    id: 11,
    image: "https://avt.mkklcdnv6temp.com/24/p/1-1583464662.jpg",
    title: "Kaguya Sama Love is War",
    author:"Akasaka Aka"
  },
                        {
    id: 12,
    image: "https://avt.mkklcdnv6temp.com/50/o/15-1583493481.jpg",
    title: "Tokyo Manji",
    author:"Wakui Ken"
  }
  
]

function BookList() {
  return (
    <div className='book--list'>
      {books.map((book) => {
        return <Book id={book.id} title={book.title} image={book.image} author={book.author} />
      })}
    </div>
  )
}

export default BookList