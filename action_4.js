function create_html_tag()
{
content=document.getElementById("input_text").value;
para_tag=document.createElement("p");
data=document.createTextNode(content);
para_tag.appendChild(data);
my_div=document.getElementById("div1");
my_div.appendChild(para_tag);
}