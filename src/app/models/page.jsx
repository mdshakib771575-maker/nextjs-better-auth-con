import React from 'react';

const ModelsPage =async () => {
    // const res = await fetch('http://localhost:3004/models',{cache:"no-store"})
    // const models = await res.json();
    const res = await fetch('http://localhost:3004/models',{next:{revalidate:10}})
    const models = await res.json();
    console.log(models)
    return (
        <div className='grid grid-cols-3 gap-5 max-w-11/12 mx-auto mt-10'>
            
                {models.map(model => <div  className='border border-green-500 p-4 rounded-2xl' key={model.id}>
                    <h1 className='font-bold text-xl'>{model.name}</h1>
                <h2>{model.category}</h2>
                <p>{model.description}</p>
                <p className='text-green-500 text-xl'>$ {model.price}</p>
                </div>)}
                
           
        </div>
    );
};

export default ModelsPage;