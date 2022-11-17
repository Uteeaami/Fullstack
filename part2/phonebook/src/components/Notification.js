const Notification = ({ message}) => {
    if (message === null) {
      return null
    }
  console.log(message)
    return (
      <div className="notify">
        {message}
      </div>
    )
  }

  export default Notification