const MechanismFilter = (props) => {
  const { mechanisms, handleMechanismChange, selectedMechanism } = props

  return (
    <>
      {mechanisms.map(mechanism => {
        return (
          <div>
            <div>
              <input type="checkbox" id={mechanism.mechanism.name} value={mechanism.mechanism.name} checked={selectedMechanism[mechanism.mechanism.name]} onChange={handleMechanismChange} className="hover:ssorange" />
              <label key={mechanism.mechanism.name} htmlFor={mechanism.mechanism.name} className="ml-1 uppercase">{mechanism.mechanism.name}</label>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MechanismFilter 