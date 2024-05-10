import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', async (request, reply) => {
  reply.send({ hello: 'world' });
});

const start = async () => {
  try {
    await fastify.listen({ host: '127.0.0.1', port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
