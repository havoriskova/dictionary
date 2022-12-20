

const Synonyms = ({synonyms}) => {


  //  console.log(synonyms);


   return(
    <div>
         <span className="italic-text">{synonyms.join(' - ')}</span>
    </div>
   )
        
}

export default Synonyms;