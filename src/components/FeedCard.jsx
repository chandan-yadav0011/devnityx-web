import React from 'react'

const FeedCard = ({user}) => {
  const {firstName,lastName,gender, skills, age, photoUrl,about}= user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
            <img
            src={user?.photoUrl}
            alt="photo" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
             {gender && age &&<p>{gender+ " "+ age}</p>}
            <p>{about}</p>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-center p-4 m-2">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
            </div>
        </div>
    </div>
  )
}

export default FeedCard