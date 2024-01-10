document.addEventListener("DOMContentLoaded", function () {
    // Sample data with a formatted date
    const data = {
        formattedDate: "2024-01-08" // Use the desired date format
    };

    // Compile Handlebars templates
    const source = document.getElementById("template").innerHTML;
    const template = Handlebars.compile(source);

    // Render the main content
    const html = template(data);
    document.getElementById("app").innerHTML = html;
});