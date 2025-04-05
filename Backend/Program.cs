
using Microsoft.EntityFrameworkCore;
using Web_Rest_API.Db;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_allowFrontend";

//  Force it to listen on 0.0.0.0 inside Docker
builder.WebHost.UseUrls("http://0.0.0.0:80");

// Add services
builder.Configuration.AddEnvironmentVariables();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

//  Remove HTTPS redirection for Docker
// app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();

app.Run();
