var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// TO JEST NAJWA¯NIEJSZE
app.UseDefaultFiles();   // index.html jako strona startowa
app.UseStaticFiles();    // wwwroot

app.Run();
