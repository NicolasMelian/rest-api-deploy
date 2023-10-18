const z = require('zod')

const movieSchema = z.object({
    title: z.string({
        required_error: 'Title is required'
    }).min(1).max(100),
    year: z.number().min(1888).max(2025),
    director: z.string().min(1).max(100),
    duration: z.number().int().positive(),
    rate: z.number().min(1).max(10).optional(),
    poster: z.string().url(
      {message: 'Poster must be a valid URL'}
    ),
    genre: z.array(z.enum
      (['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy'])
    )
    })



function validateMovie(object) {
    return movieSchema.safeParse(object);
}

function validatePartialMovie(object) {
    return movieSchema.partial().safeParse(object);
}
  
module.exports = {
    validateMovie,
    validatePartialMovie
}