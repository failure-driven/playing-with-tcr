<h1 align="center">Playing with TCR</h1>

<div align="center">

[Slides PDF](Playing_with_TCR.pdf)

[~slides~](https://failure-driven.github.io/playing-with-tcr/)

</div>

TCR = `(Test && Commit) || Revert`

## Talk

as presented at:
  * [Mon 2 Sep 2019 - Melbourne Python Meetup](https://www.meetup.com/Melbourne-Python-Meetup-Group/events/rrvtsqyzmbdb/)
  * [Wed 28 Aug 2019 - Melbourne Ruby](https://www.meetup.com/Ruby-On-Rails-Oceania-Melbourne/events/hrznsqyzlblc/)

## Get going with TCR

### Python

```sh
cd tcr-python-substring

# write some code and some tests
# save your files

bin/tcr.sh
```

TODO: cannot seem to run tests for any directory

```sh
python3 -m unittest discover fizzbuzz/test/

# TODO: should just work with
python -m unittest discover
```

### Ruby/RSpec

```sh
cd tcr-rspec-dojo

# write some code and some tests
# save your files

bin/tcr.sh
```

eg.

  _TODO_

### Javascript/React/Jest

```sh
cd tcr-react-todo

# write some code and some tests
# save your files

bin/tcr.sh
```

eg.

  _TODO_

### Layered Testing

Multi-layered, outside in, BDD

or multi loop testing where you have an acceptance test that first fails and
then you do a separeate loop (layer) of testing at the unit level.

_coming soon_

## More information

* Xavier Detnat talk - May 16, 2019 { newcrafts } conference - Paris
  * http://videos.ncrafts.io/video/338862766
* Popularised by Kent Beck - Sep 28, 2018
  * https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864
* Rachel M. Carmena@bberrycarmen
  * https://twitter.com/bberrycarmen/status/1062421008261541888 
* tcr.sh script from Sam Gathercole - sapagat
  * https://github.com/sapagat/tcr 

