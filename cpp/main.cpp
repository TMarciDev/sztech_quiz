#include <iostream>
#include "prefix.h"
#include <vector>
#include <algorithm>
#include "prefix.h"
#include <string>

const int max = 1000;

int main()
{
    int your_mark = 1;

    std::vector<int> v;
    for (int i = 0; i < max; ++i)
    {
        v.push_back(i);
    }

    prefix_vector<int> p(v);
    prefix_vector<int> a(p);
    prefix_vector<int> b(p);
    prefix_vector<int> c(p);

    a.push_back(2);
    b.push_back(4);
    c.push_back(8);
    c.push_back(1);

    std::vector<std::string> s;
    s.push_back("Hello");
    prefix_vector<std::string> sh(s);
    std::cout << "sh: " << sh.size() << std::endl;
    prefix_vector<std::string> sa(sh);
    sa.push_back("World");
    prefix_vector<std::string> sb(sh);

    if (
        8 == c.at(max) &&
        &(a.at(max / 2)) == &(b.at(max / 2)) &&
        a.size() == b.size() &&
        1 == p.at(1) &&
        4 == b.at(max) &&
        &(b.at(max - 1)) == &(c.at(max - 1)) &&
        &(b.at(max)) != &(c.at(max)) &&
        1 == sb.size() &&
        1 == sh.size() &&
        "Hello" == sa.at(0))
    {
        std::cout << std::endl
                  << "SUCCESS" << std::endl;
        your_mark = c.size() - v.size();
    }

    /* 3-as
    std::vector<int> cv = v;
    prefix_vector<int> cc( cv );
    prefix_vector<int> cd( cc );
    cd.push_back( -1 );
    cc.set( max / 2, 2 );

    b.set( max / 2, 0 );
    sa.push_back( ":-)" );
    sa.set( 1, "World!" );

    if ( &( cc.at( max / 3 ) ) == &( cd.at( max / 3 ) ) && 0 == b.at( max / 2 ) &&
         cc.at( max / 2 ) == your_mark && max / 2 == cd.at( max / 2 ) &&
         -1 == cd.at( max ) && max == cc.size() && max + 1 == cd.size() &&
         3 == sa.at( 2 ).size() && 6 == sa.at( 1 ).size() )
    {
      your_mark = sa.size();
    }
    */
    /* 4-es
    int iar[] = { 7, 2, 1, 7, 5 };
    prefix_vector<int> ap( iar );
    prefix_vector<int> sap( ap );
    ap.push_back( 2 );
    sap.push_back( 2 );
    sap.push_back( 2 );

    std::string strar[] = { "C++", "Forth" };
    prefix_vector<std::string> sp( strar );

    std::vector<std::string> vs = sp;
    std::vector<int> vi = ap;

    if ( 2 == sp.size() && your_mark == ap.at( 1 ) + ap.at( 2 ) &&
         "C++" == vs[ 0 ] && 5 == vs[ 1 ].size() && 6 == vi.size() )
    {
      your_mark = ap.size() - vs.size();
    }
    */
    /* 5-os
    prefix_vector<int>::const_iterator i = std::find( ap.begin(), ap.end(), 1 );
    if ( i != ap.end() && 1 == std::count( sp.begin(), sp.end(), "C++" ) )
    {
      your_mark = std::count( ap.begin(), ap.end(), 2 ) +
                  std::count( sap.begin(), sap.end(), 2 );
    }
    */
    std::cout << "Your mark is " << your_mark;
    std::endl(std::cout);
}