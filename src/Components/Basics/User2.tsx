interface User2Props {
    name: string; 
    age: number;
    LockedIn: boolean;
}

const User2 = ({name,age,LockedIn}: User2Props) => {
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{LockedIn.toString()}</p>
    </div>
  )
}

export default User2