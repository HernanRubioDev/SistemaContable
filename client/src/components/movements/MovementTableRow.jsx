const MovementTableRow = ({movement, index, searchLines})=>{
  const {id_move, move_date, description} = movement
  return(
  <tr>
    <td>{index}</td>
    <td>{move_date}</td>
    <td>{description}</td>
    <td className="borde d-flex justify-content-center"><button onClick={()=>searchLines(id_move)} type="button" className='border-0 bg-transparent d-flex align-self-center'><span className="material-symbols-outlined text-secondary">visibility</span></button></td>
  </tr>
  );
}

export default MovementTableRow;