import React from 'react';
import './secondpage.css';


function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src="https://i.postimg.cc/pdJdRdBN/zenseact.png"/>
					</div>
					<li><a href="#settings">Settings</a></li>
					<li><a href="#guidelines">Guidelines</a></li>
				</ul>

				<div class="exitProg">
					<input type="button" name="Reset" id="reset" />
					<button class="btn btn-danger">Reset</button>
				</div>
			</nav>

			<section class="section">
				<div class="box-main">
				
				</div>
			</section>


      <div id="grid">
  <div class="head">Head 1</div>
  <div class="head">Head 2</div>
  <div class="head">Head 3</div>
</div>





			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved to Zenseact
				</p>
			</footer>
		</div>
	)
}

export default App
