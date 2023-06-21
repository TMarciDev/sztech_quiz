#ifndef header
// #include <typeinfo>
#define header

#include <list>
#include <utility>

template <typename T>

struct BasicAssert
{
    bool operator()(T a, T b) const
    {
        return a == b;
    }
};

template <typename T, class Assert = BasicAssert<T>>
class domino
{
private:
    Assert assert;
    std::list<T> line;

public:
    domino(std::pair<T, T> pair)
    {
        line.push_back(pair.first);
        line.push_back(pair.second);
    }

    equals(domino d) const
    {
        /*
        if (d.size() != line.size())
            return false;
        // int same = 0;

        typename std::list<T>::iterator it;
        for (it = line.begin(); it != line.end(); ++it)
        {
            std::cout << "hali\n";
        } */

        /*         for(int i = 0; i < d.size(); ++i) {
                    if(line.at(i) != d.at(i) || line.at(i) != )
                } */
        if(line == d.getLine()) {
            return true;
        } else {
            std::list<T> line2(line);
            line2.reverse();
            return line2 == d.getLine();
        }

        //return false;
        //return line == d.getLine() || line.reverse() == d.getLine();
    }
    std::list<T> getLine()
    {
        return line;
    }
    T at(int idx)
    {
        return line[idx];
    }

    //* push_back
    bool operator>>(std::pair<T, T> const &pair)
    {
        return push_back(pair);
    }

    //* push_front
    bool operator<<(std::pair<T, T> const &pair)
    {
        return push_front(pair);
    }

    //* push_front
    friend bool operator>>(std::pair<T, T> const &pair, domino<T, Assert> &d)
    {
        return d.push_front(pair);
    }
    //* push_back
    friend bool operator<<(std::pair<T, T> const &pair, domino<T, Assert> &d)
    {
        return d.push_back(pair);
    }

    bool push_back(std::pair<T, T> pair)
    {
        if (assert(line.back(), pair.first))
        {
            line.push_back(pair.second);
            return true;
        }
        else if (assert(line.back(), pair.second))
        {
            std::swap(pair.first, pair.second);
            line.push_back(pair.second);
            return true;
        }
        return false;
    }

    bool push_front(std::pair<T, T> pair)
    {
        if (assert(line.front(), pair.second))
        {
            line.push_front(pair.first);
            return true;
        }
        else if (assert(line.front(), pair.first))
        {
            std::swap(pair.first, pair.second);
            line.push_front(pair.first);
            return true;
        }
        return false;
    }
    int size() const
    {
        return line.size() - 1;
    }
};

#endif