export interface ITripsList {
  id: string,
  city: string,
  country: string,
  description: string,
  price: number,
  startDate: string,
  endDate: string,
  imageUrl: string,
  averageRating: number,
  days: ITripDays[],
  reviews: ITripReviews[],
  selected?: boolean;
}

export interface ITripDays {
  id: string,
  day: number,
  city: string,
  places: ITripPlaces[]
}

interface ITripPlaces {
  id: string,
  title: string,
  description: string,
  price: number
}

interface ITripReviews {
  id: string,
  rating: number,
  reviewText: string,
  date: string,
  userId: string,
  userName: string,
  userSurname: string,
  userAvatarUrl: string
}

// {
//   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "city": "string",
//   "country": "string",
//   "description": "string",
//   "price": 0,
//   "startDate": "2024-12-10",
//   "endDate": "2024-12-10",
//   "averageRating": 0,
//   "days": [
//     {
//       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "day": 0,
//       "city": "string",
//       "places": [
//         {
//           "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "title": "string",
//           "description": "string",
//           "price": 0
//         }
//       ]
//     }
//   ],
//   "reviews": [
//     {
//       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "rating": 0,
//       "reviewText": "string",
//       "date": "2024-12-10",
//       "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "userName": "string",
//       "userSurname": "string",
//       "userAvatarUrl": "string"
//     }
//   ]
// }