//This program is intended to solve problem 1 of the ProjecEuler100 challenge.  It should take an input number and return
//the sum of all the integers between 0 and the number that are divisible by 3 and 5.

#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int main(int argc, char *argv[])
{
    // ensure proper usage
    if (argc != 2)
    {
        fprintf(stderr, "Usage: infile \n");
        return 1;
    }

    char *number = argv[1];
    int num = atoi(number);
    int mults[20000];
    int sum = 0;
    int lng = 0;
    int j = 0;

    //Adds all numbers divisible by 3 to the array.
    for (int i = 1;i < num; i++ )
    {
        if (i % 3 == 0)
        {
            mults[lng] = i;
            lng++;
        }
    }

    //Adds all numbers divisible by 5 to the array.
    for (int l = 1, m =0; l < num; l++)
    {
        if (l % 5 == 0)
        {
            mults[lng] = l;
            lng++;
        }
    }

    //Removes duplicates from the array.
    for(int i = 0, k = 0; i < lng; i++)
    {
        for(j = i + 1; j < lng; )
        {
            if(mults[j] == mults[i])
            {
                for(k = j; k < lng; k++)
                {
                    mults[k] = mults[k + 1];
                }
                lng--;
            }
            else
            {
                j++;
            }
        }
    }

    //Sums the elements of the array.
    for (int r = 0; r < lng; r++)
    {
        sum = sum + mults[r];
    }

    printf("sum = %d\n", sum);
}
