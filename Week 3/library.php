<?php

// Abstract Class - Item
abstract class Item {
    protected $ID;
    protected $title;

    public function __construct($ID, $title) {
        $this->ID = $ID;
        $this->title = $title;
    }

    abstract public function getDescription();
}

// Book Class
class Book extends Item {
    private $author;
    private $ISBN;
    private $status;

    public function __construct($ID, $title, $author, $ISBN) {
        parent::__construct($ID, $title);
        $this->author = $author;
        $this->ISBN = $ISBN;
        $this->status = "available";
    }

    public function getDescription() {
        return "{$this->title} by {$this->author}";
    }

    public function checkOut() {
        if ($this->status == "available") {
            $this->status = "checked out";
            return true;
        }
        return false;
    }

    public function returnBook() {
        $this->status = "available";
    }
}

// Library Class
class Library {
    private $items = [];

    public function addItem(Item $item) {
        $this->items[$item->ID] = $item;
    }

    public function removeItem($ID) {
        unset($this->items[$ID]);
    }

    public function searchItem($ID) {
        return isset($this->items[$ID]) ? $this->items[$ID] : null;
    }

    public function getAllItems() {
        return $this->items;
    }
}

// Functional Tests
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

    // Test checkout functionality (specific to books)
    assert($book2->checkOut() == true);
    assert($book2->checkOut() == false);
    $book2->returnBook();

    echo "All tests passed!";
}

// Run the tests
testLibraryFunctions();

?>
