
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CollectionController : BaseApiController
    {
        private readonly ICollectionRepository _collectionRepo;
        private readonly DataContext _context;
        public CollectionController(ICollectionRepository collectionRepo, DataContext context)
        {
            _context = context;
            _collectionRepo = collectionRepo;

        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<ActionResult<IEnumerable<Collection>>> getCollections()
        {
            var collections = await _collectionRepo.GetCollectionsAsync();

            return Ok(collections);
        }

        [HttpPost]
        public async Task<IActionResult> AddCollection([FromForm] Collection collectionToAdd)
        {
            return Ok(await _collectionRepo.AddNewCollection(collectionToAdd));
        } 

        [HttpDelete]
        public async Task<ActionResult> DeleteCollection(int id)
        {
            var collection = await _collectionRepo.GetCollectionByIdAsync(id);

            if (collection == null)
            {
                return BadRequest("Product does not exists");
            }

            await _collectionRepo.DeleteCollection(collection.Id);

            return Ok(); 
        }
    }
}