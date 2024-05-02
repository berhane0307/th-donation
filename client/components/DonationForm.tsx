
import React, { useState } from 'react'
import '../styles/index.scss'

const DonationForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0)
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Displaying a confirmation message
    alert('እግዚኣብሔር በረኸትኩም የብዝሓዮ!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2> እቲ ዝህብ ዝያዳ ይባረኽ! ግ.ሃ 20፥35</h2>
      <div className="form-group">
        <label htmlFor="amount">መጠን ገንዘብ:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">መልእኽቲ:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-input"
          rows={4}
          required
        />
      </div>
      <button type="submit" className="form-button">
        ልግሲ
      </button>
    </form>
  )
}

export default DonationForm
