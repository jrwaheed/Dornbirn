         import LikeButton from './like-button';

        function Header({title}) {
          return <h1>{title ? title : 'Default Title'}</h1>;
        };


   

        export default function Homepage() {
            const names = ["ada", 'belle', 'carol'];

            
            return <div>
                    <Header title="Develope. Preview. Ship"/>
                    <ul>
                        {names.map(name => <li key={name}> {name} </li>)}
                    </ul>
                    <LikeButton />
                </div>;
        };


 


