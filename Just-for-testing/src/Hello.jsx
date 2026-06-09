function Hello({name, age, education, hobbies}){  // i can write props in (props) or i can write direct ({name, age, class....etc})
    // if user doesn't send any info we can set default usng ({name = "user", age = 19, education = 12})
    return (
        <>
        <h1>Hello {name}</h1>
        <h3>age: {age}</h3>
        <h3>class: {education}</h3>
        <ul>        
            {hobbies.map((hobby, index)=> (  // this is how we take array's property usning prope
                <li key={index}>{hobby}</li>                  
            ))}
        </ul>
        </>
    )

}

export default Hello