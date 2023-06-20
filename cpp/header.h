#ifndef header
#include <typeinfo>
#define header

void test() {
    const std::type_info& type = typeid(4e2);
    std::cout << "Type of num: " << type.name() << std::endl;

}

#endif