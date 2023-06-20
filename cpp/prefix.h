#ifndef header
#include <typeinfo>
#define header

#include <vector>

template <typename T>
class prefix_vector
{
private:
public:
	std::vector<T> *vector_base;
	std::vector<T> vector_extended;

	prefix_vector(std::vector<T> &v) : vector_base(&v) {}
	prefix_vector(prefix_vector<T> &p_v)
	{
		vector_base = p_v.vector_base;
	}

	void push_back(T elem)
	{
		// vector->push_back(elem);
		vector_extended.push_back(elem);
	}

	T &at(const int idx)
	{
		const int baseSize = vector_base->size();
		if (baseSize > idx)
		{
			return vector_base->at(idx);
		}
		else
		{
			return vector_extended.at(idx - baseSize);
		}
	}

	int size()
	{
		return vector_base->size() + vector_extended.size();
	}
};

#endif