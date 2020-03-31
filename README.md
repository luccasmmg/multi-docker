
# Table of Contents

1.  [Description](#org8f94a9c)
2.  [Prerequisites](#orgab7bb14)
3.  [Configuration](#orgc69570c)
4.  [Troubleshooting](#org497a0fb)



<a id="org8f94a9c"></a>

# Description

The most overengineered Fibonacci sequence calculator ever built. It has a react
frontend(that you need to refresh to see results), a express backend, with two
almost redundant storage mechanisms(postgres and redis), and by the way,
currently the worker connected to redis, that was supposed to calculate the
fibonnacci number doesnt work.


<a id="orgab7bb14"></a>

# Prerequisites

    sudo apt install docker
    sudo apt install docker-compose


<a id="orgc69570c"></a>

# Configuration

    docker-compose up --build --remove-orphans


<a id="org497a0fb"></a>

# Troubleshooting

Sometimes the API starts after the databases in dev mode, so you need to Ctrl-C
and up the containers again.

