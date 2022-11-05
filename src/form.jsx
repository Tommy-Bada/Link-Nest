function Form(){
        return(
           <form>
               <h1 id="form-title">Contact Me</h1>
               <p id="form-subtitle">Hi there, contact me to ask me about anything you have in mind.</p>
               <div id="name-inputs">
                   <div>
                   <label for="first_name">First Name</label><br/>
                   <input type="text" id="first_name" placeholder="Enter your first name" name="first_name"/>
                   </div>
                   <div>
                   <label for="last_name">Last Name</label><br/>
                   <input type="text" id="last_name" placeholder="Enter your last name" name="last_name"/>
                   </div>
               </div>
               <div>
                    <label for="email">Email</label><br/>
                    <input type="email" id="email" placeholder="yourname@email.com" name="email"/>
               </div>
               <div>
                    <label for="message">Message</label><br/>
                    <textarea id="message" name="message">Send me a message, and I'll reply very soon</textarea>
                </div>
                <div>
                    <input type="checkbox" id="data-confirmation" name="data-confirmation" value="confirmed" />
                    <label for="data-confirmation">You agree to providing your data to Bada who may contact you.</label><br/>
                </div>
               <div>
                    <input type="submit" id="btn__submit" value="Send Message" />
               </div>
           </form>
        )
}

export default Form