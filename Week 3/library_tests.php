<?php

include 'library.php'; // Include the library.php file to access the classes

function testLibraryFunctions() {
    $library = new Library();

    $book1 = new Book(1, "Title1", "Author1", "12345");
    $book2 = new Book(2, "Title2", "Author2", "67890");

    // Test adding items
    $library->addItem($book1);
    $library->addItem($book2);
    assert(count($library->getAllItems()) == 2);

    // Test searching for an item
    $searchedBook = $library->searchItem(1);
    assert($searchedBook !== null && $searchedBook->getDescription() == "Title1 by Author1");

    // Test removing an item
    $library->removeItem(1);
    assert(count($library->getAllItems()) == 1);

    // Test checkout functionality
    assert($book2->checkOut() == true);
    assert($book2->checkOut() == false); // Can't checkout already checked out book
    $book2->returnBook();

    echo "All tests passed!";
}

testLibraryFunctions();

?>
