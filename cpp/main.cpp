#include <iostream>

#include <string>

class CustomString {
private:
    std::string data;

public:
    CustomString(const std::string& str) : data(str) {
    }

    void customFunction() {
        // Custom functionality
        this->data += '_';
    }

    std::string getString() const {
        return data;
    }

    // Forward other necessary member functions
};

int main() {
    CustomString myString("Hello, world!");

    std::cout << "Original string: " << myString.getString() << std::endl;

    myString.customFunction();

    std::cout << "Modified string: " << myString.getString() << std::endl;

    return 0;
}