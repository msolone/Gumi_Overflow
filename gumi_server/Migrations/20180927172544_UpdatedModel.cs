using Microsoft.EntityFrameworkCore.Migrations;

namespace Gumi_Server.Migrations
{
    public partial class UpdatedModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Upvotes",
                table: "Answers",
                newName: "UpVotes");

            migrationBuilder.RenameColumn(
                name: "Postedby",
                table: "Answers",
                newName: "PostedBy");

            migrationBuilder.RenameColumn(
                name: "Downvotes",
                table: "Answers",
                newName: "DownVotes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpVotes",
                table: "Answers",
                newName: "Upvotes");

            migrationBuilder.RenameColumn(
                name: "PostedBy",
                table: "Answers",
                newName: "Postedby");

            migrationBuilder.RenameColumn(
                name: "DownVotes",
                table: "Answers",
                newName: "Downvotes");
        }
    }
}
