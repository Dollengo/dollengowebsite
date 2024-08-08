import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <div className="mb-4">
        <img src="app/imgs/DollengoStudios.png" alt="dollengo-studios-logo" className="w-full h-auto" />
      </div>
      <p className="mb-4">
        {`# About Me:
        
        My name is Tarcísio Nascimento Silva. I was born in a city in the countryside of Sergipe/Brazil. I started with programming at 2018, with RPG maker, this game engine doesn't exist literally codes, but exists logic. But I start with literally coding at end of 2023, with Python. I actually learning C++ for create game engines and more. I know: 'C++, Python, HTML5, JavaScript, CSS and Java'
        
        # Dollengo:
        
        The name "Dollengo" was born in 2022. With my science teacher giving me an activity in class. This activity was for me to create a medicine. The medicine's slogan, in Portuguese makes more sense, is: "Dollengo, faz você cagar molengo", translating... = "Dollengo, make you shit soft".I was thinking of something to rhyme with "molengo", so I thought Dollengo. So when I went to create a name in the game Fortnite, I thought. Dollengo. So that name became my nickname.
`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
