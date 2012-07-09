
		define(["vendor/Handlebars"], function(Handlebars) {
			return {
		
"BackgroundPicker": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var foundHelper, self=this;  return "<div class=\"modal-header\">	<button class=\"close\" data-dismiss=\"modal\">×</button>	<h3>Change Background</h3></div><div class=\"modal-body\">	<div class=\"pull-left\">		<div><h4>Gradient</h4></div>		<div class=\"gradientPicker\">		</div>		<div class=\"gradientOptions\">			<div class=\"btn-group\">	  			<button class=\"btn\">Type</button>	  			<button class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">	    			<span class=\"caret\"></span>	  			</button>	  			<ul class=\"dropdown-menu\" data-option=\"type\">	    			<li><a href=\"#\" data-value=\"linear\">Linear</a></li>	    			<li><a href=\"#\" data-value=\"radial\">Radial</a></li>	  			</ul>			</div>			<div class=\"btn-group\">	  			<button class=\"btn\">Direction</button>	  			<button class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">	    			<span class=\"caret\"></span>	  			</button>	  			<ul class=\"dropdown-menu\" data-option=\"direction\">	    			<li><a href=\"#\" data-value=\"top\">Top</a></li>	    			<li><a href=\"#\" data-value=\"left\">Left</a></li>	    			<li><a href=\"#\" data-value=\"15deg\">15&deg;</a></li>	    			<li><a href=\"#\" data-value=\"30deg\">30&deg;</a></li>	    			<li><a href=\"#\" data-value=\"45deg\">45&deg;</a></li>	    			<li><a href=\"#\" data-value=\"105deg\">105&deg;</a></li>	    			<li><a href=\"#\" data-value=\"120deg\">120&deg;</a></li>	    			<li><a href=\"#\" data-value=\"135deg\">135&deg;</a></li>	  			</ul>			</div>		</div>	</div>	<div class=\"pull-left bgPreview\">		<div><h4>Background Preview</h4></div>		<div class=\"gradientPreview\">		</div>	</div>	<div style=\"clear: both\"></div></div><div class=\"modal-footer\">	<a href=\"#\" class=\"btn btn-inverse ok\">OK</a>	<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancel</a></div>";}),
"OpenDialog": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;function program1(depth0,data) {    var buffer = "", stack1;  buffer += "			<li><a href=\"#\"><span>";  stack1 = depth0;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, ".", { hash: {} }); }  buffer += escapeExpression(stack1) + "</span><button class=\"close\">x</button></a></li>		";  return buffer;}  buffer += "<div class=\"modal-header\">	<button class=\"close\" data-dismiss=\"modal\">×</button>	<h3>Open</h3></div><div class=\"modal-body\">	<ul class=\"nav nav-list\">		";  foundHelper = helpers.fileNames;  stack1 = foundHelper || depth0.fileNames;  stack2 = helpers.each;  tmp1 = self.program(1, program1, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "	</ul></div><div class=\"modal-footer\">	<a href=\"#\" class=\"btn btn-inverse ok\">OK</a>	<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancel</a></div>";  return buffer;}),
"PictureGrabber": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var foundHelper, self=this;  return "<div class=\"modal-header\">	<button class=\"close\" data-dismiss=\"modal\">×</button>	<h3>Insert Picture</h3></div><div class=\"modal-body\">	<div class=\"alert alert-error disp-none\">  		<button class=\"close\" data-dismiss=\"alert\">×</button>  		The image URL you entered appears to be incorrect	</div>	<h4>URL:</h4><input type=\"text\" name=\"imageUrl\"></input>	<h4>Preview:</h4>	<ul class=\"thumbnails\">		<li class=\"span4\">			<div class=\"thumbnail\">				<img class=\"preview\" width=\"360\" height\"268\"></img>			</div>		</li>	</ul></div><div class=\"modal-footer\">	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Insert Image</a></div>";}),
"RawTextImporter": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var foundHelper, self=this;  return "<div class=\"modal-header\">	<button class=\"close\" data-dismiss=\"modal\">×</button>	<h3>Import/Export Show (from/to JSON)</h3></div><div class=\"modal-body\">	<h4>JSON string</h4>	<textarea style=\"width: 100%; height: 100%\" rows=\"10\"></textarea></div><div class=\"modal-footer\">	<a href=\"#\" class=\"btn btn-inverse ok\">OK</a></div>";}),
//"SaveAsDialog": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;function program1(depth0,data) {    var buffer = "", stack1;  buffer += "					<li><a href=\"#\"><span>";  stack1 = depth0;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, ".", { hash: {} }); }  buffer += escapeExpression(stack1) + "</span><button class=\"close\">x</button></a></li>				";  return buffer;}function program3(depth0,data) {    var buffer = "", stack1;  buffer += "					<li><a href=\"#\"><span>";  stack1 = depth0;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, ".", { hash: {} }); }  buffer += escapeExpression(stack1) + "</span><button class=\"close\">x</button></a></li>				";  return buffer;}  buffer += "<div class=\"modal-header\">	<button class=\"close\" data-dismiss=\"modal\">×</button>	<h3>Save as...</h3></div><div class=\"modal-body\">	<!-- <ul class=\"nav nav-tabs\">  		<li class=\"active\"><a href=\"#saveLocalTab\">Local</a></li>  		<li><a href=\"#saveRemoteTab\">Remote</a></li>	</ul> -->	<!-- <div class=\"tab-content\">  		<div class=\"tab-pane active\" id=\"saveLocalTab\"> -->		  	<h4>Name</h4>			<input type=\"text\"></input>			<ul class=\"nav nav-list\">				";  foundHelper = helpers.fileNames;  stack1 = foundHelper || depth0.fileNames;  stack2 = helpers.each;  tmp1 = self.program(1, program1, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "			</ul>  		<!-- </div>  		<div class=\"tab-pane\" id=\"saveRemoteTab\">  			<h4>Name</h4>			<input type=\"text\"></input>			<ul class=\"nav nav-list\">				";  foundHelper = helpers.fileNames;  stack1 = foundHelper || depth0.fileNames;  stack2 = helpers.each;  tmp1 = self.program(3, program3, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "			</ul>  		</div>	</div> --></div><div class=\"modal-footer\">	<a href=\"#\" class=\"btn btn-inverse ok\">OK</a>	<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancel</a></div>";  return buffer;})
"SaveAsDialog": Handlebars.template
(
	function (Handlebars,depth0,helpers,partials,data)
	{
		helpers = helpers || Handlebars.helpers; 
		var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

		function program1(depth0,data)
		{    
			var buffer = "", stack1;  buffer += "					<li><a href=\"#\"><span>"; 
			stack1 = depth0; 

			if(typeof stack1 === functionType)
				{
					stack1 = stack1.call(depth0, { hash: {} }); 
				}
			else if(stack1=== undef)
				{
					stack1 = helperMissing.call(depth0, ".", { hash: {} });
				} 

			buffer += escapeExpression(stack1) + "</span><button class=\"close\">x</button></a></li>				"; 
			return buffer;
		}

		function program3(depth0,data)
		{
			var buffer = "", stack1;
			buffer += "					<li><a href=\"#\"><span>";
			stack1 = depth0;

			if(typeof stack1 === functionType)
			{
				stack1 = stack1.call(depth0, { hash: {} });
			}
			else if(stack1=== undef)
			{
				stack1 = helperMissing.call(depth0, ".", { hash: {} });
			} 

			buffer += escapeExpression(stack1) + "</span><button class=\"close\">x</button></a></li>				"; 
			return buffer;
		}

		buffer += "<div class=\"modal-header\"> \
	<button class=\"close\" data-dismiss=\"modal\">×</button> \
	<h3>Save as...</h3> \
</div> \
<div class=\"modal-body\">	  	\
	<h4>Name</h4> \
	<input type=\"text\"></input>	 \
	<h4>Description</h4> \
	<input type=\"text\"></input> \
	<h4>Tags</h4> \
	<input type=\"text\"></input>		 \
	<ul class=\"nav nav-list\">";
		
		foundHelper = helpers.fileNames; 
		stack1 = foundHelper || depth0.fileNames; 
		stack2 = helpers.each; 
		tmp1 = self.program(1, program1, data); 
		tmp1.hash = {}; 
		tmp1.fn = tmp1; 
		tmp1.inverse = self.noop;
		stack1 = stack2.call(depth0, stack1, tmp1);

		if(stack1 || stack1 === 0)
		{
			buffer += stack1;
		}

		buffer += "</ul>";
		foundHelper = helpers.fileNames; 
		stack1 = foundHelper || depth0.fileNames; 
		stack2 = helpers.each; 
		tmp1 = self.program(3, program3, data); 
		tmp1.hash = {};
		tmp1.fn = tmp1;
		tmp1.inverse = self.noop;
		stack1 = stack2.call(depth0, stack1, tmp1);

		if(stack1 || stack1 === 0)
		{
			buffer += stack1;
		}

		buffer += "</div> \
<div class=\"modal-footer\"> \
	<a href=\"#\" class=\"btn btn-inverse ok\">OK</a> \
	<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancel</a></div>";
		return buffer;
	}
)
}});