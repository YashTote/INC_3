using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using Microsoft.AspNetCore.Cors;
var builder = WebApplication.CreateBuilder(args);


var con = builder.Configuration.GetConnectionString("mycon");
builder.Services.AddDbContext<ApplicationDbContext> (options => options.UseSqlServer(con));



// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
