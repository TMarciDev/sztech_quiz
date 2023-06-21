#ifndef header
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

    void print()
    {
        for (auto const &i : line)
        {
            std::cout << i << ", ";
        }
        std::cout << std::endl;
    }

    equals(domino d) const
    {

        if (d.size() != size())
        {
            return false;
        }

        typename std::list<T>::const_iterator it1 = line.begin();
        typename std::list<T>::const_iterator it2 = d.getLine().begin();
        typename std::list<T>::const_iterator it1_r = line.end();
        --it1_r;

        for (; it1 != line.end();)
        {
            if (!assert(*it1, *it2) && !assert(*it1_r, *it2))
            {
                return false;
            }
            ++it1;
            ++it2;
            --it1_r;
        }
        return true;
    }
    std::list<T> getLine()
    {
        return line;
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