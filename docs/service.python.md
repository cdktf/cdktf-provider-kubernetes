# `kubernetes_service`

Refer to the Terraform Registory for docs: [`kubernetes_service`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service).

# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-kubernetes.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-kubernetes.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service kubernetes_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.Service.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.Service(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ServiceMetadata,
  spec: ServiceSpec,
  id: str = None,
  timeouts: ServiceTimeouts = None,
  wait_for_load_balancer: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.waitForLoadBalancer">wait_for_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#metadata Service#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#spec Service#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#timeouts Service#timeouts}

---

##### `wait_for_load_balancer`<sup>Optional</sup> <a name="wait_for_load_balancer" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.waitForLoadBalancer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#wait_for_load_balancer Service#wait_for_load_balancer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.resetWaitForLoadBalancer">reset_wait_for_load_balancer</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.Service.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.service.Service.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.service.Service.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.service.Service.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.service.Service.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.service.Service.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.service.Service.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.service.Service.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.service.Service.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.service.Service.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.service.Service.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.service.Service.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.service.Service.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.service.Service.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.service.Service.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.service.Service.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.service.Service.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.service.Service.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.service.Service.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.service.Service.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.service.Service.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.service.Service.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.service.Service.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.service.Service.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.service.Service.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.service.Service.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the service that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#annotations Service#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.service.Service.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#generate_name Service#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.service.Service.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the service.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#labels Service#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.service.Service.putMetadata.parameter.name"></a>

- *Type:* str

Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#name Service#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.service.Service.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the service must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#namespace Service#namespace}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.service.Service.putSpec"></a>

```python
def put_spec(
  allocate_load_balancer_node_ports: typing.Union[bool, IResolvable] = None,
  cluster_ip: str = None,
  cluster_ips: typing.List[str] = None,
  external_ips: typing.List[str] = None,
  external_name: str = None,
  external_traffic_policy: str = None,
  health_check_node_port: typing.Union[int, float] = None,
  internal_traffic_policy: str = None,
  ip_families: typing.List[str] = None,
  ip_family_policy: str = None,
  load_balancer_class: str = None,
  load_balancer_ip: str = None,
  load_balancer_source_ranges: typing.List[str] = None,
  port: typing.Union[IResolvable, typing.List[ServiceSpecPort]] = None,
  publish_not_ready_addresses: typing.Union[bool, IResolvable] = None,
  selector: typing.Mapping[str] = None,
  session_affinity: str = None,
  session_affinity_config: ServiceSpecSessionAffinityConfig = None,
  type: str = None
) -> None
```

###### `allocate_load_balancer_node_ports`<sup>Optional</sup> <a name="allocate_load_balancer_node_ports" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.allocateLoadBalancerNodePorts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`.

It may be set to `false` if the cluster load-balancer does not rely on `NodePorts`.  If the caller requests specific `NodePorts` (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type `LoadBalancer`. Default is `true`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-nodeport-allocation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#allocate_load_balancer_node_ports Service#allocate_load_balancer_node_ports}

---

###### `cluster_ip`<sup>Optional</sup> <a name="cluster_ip" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.clusterIp"></a>

- *Type:* str

The IP address of the service.

It is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. `None` can be specified for headless services when proxying is not required. Ignored if type is `ExternalName`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#cluster_ip Service#cluster_ip}

---

###### `cluster_ips`<sup>Optional</sup> <a name="cluster_ips" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.clusterIps"></a>

- *Type:* typing.List[str]

List of IP addresses assigned to this service, and are usually assigned randomly.

If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise creation of the service will fail. If this field is not specified, it will be initialized from the `clusterIP` field. If this field is specified, clients must ensure that `clusterIPs[0]` and `clusterIP` have the same value. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#cluster_ips Service#cluster_ips}

---

###### `external_ips`<sup>Optional</sup> <a name="external_ips" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.externalIps"></a>

- *Type:* typing.List[str]

A list of IP addresses for which nodes in the cluster will also accept traffic for this service.

These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#external_ips Service#external_ips}

---

###### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.externalName"></a>

- *Type:* str

The external reference that kubedns or equivalent will return as a CNAME record for this service.

No proxying will be involved. Must be a valid DNS name and requires `type` to be `ExternalName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#external_name Service#external_name}

---

###### `external_traffic_policy`<sup>Optional</sup> <a name="external_traffic_policy" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.externalTrafficPolicy"></a>

- *Type:* str

Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints.

`Local` preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. `Cluster` obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. More info: https://kubernetes.io/docs/tutorials/services/source-ip/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#external_traffic_policy Service#external_traffic_policy}

---

###### `health_check_node_port`<sup>Optional</sup> <a name="health_check_node_port" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.healthCheckNodePort"></a>

- *Type:* typing.Union[int, float]

Specifies the Healthcheck NodePort for the service.

Only effects when type is set to `LoadBalancer` and external_traffic_policy is set to `Local`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#health_check_node_port Service#health_check_node_port}

---

###### `internal_traffic_policy`<sup>Optional</sup> <a name="internal_traffic_policy" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.internalTrafficPolicy"></a>

- *Type:* str

Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only.

`Cluster` routes internal traffic to a Service to all endpoints. `Local` routes traffic to node-local endpoints only, traffic is dropped if no node-local endpoints are ready. The default value is `Cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#internal_traffic_policy Service#internal_traffic_policy}

---

###### `ip_families`<sup>Optional</sup> <a name="ip_families" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.ipFamilies"></a>

- *Type:* typing.List[str]

IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#ip_families Service#ip_families}

---

###### `ip_family_policy`<sup>Optional</sup> <a name="ip_family_policy" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.ipFamilyPolicy"></a>

- *Type:* str

IPFamilyPolicy represents the dual-stack-ness requested or required by this Service.

If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#ip_family_policy Service#ip_family_policy}

---

###### `load_balancer_class`<sup>Optional</sup> <a name="load_balancer_class" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.loadBalancerClass"></a>

- *Type:* str

The class of the load balancer implementation this Service belongs to.

If specified, the value of this field must be a label-style identifier, with an optional prefix. This field can only be set when the Service type is `LoadBalancer`. If not set, the default load balancer implementation is used. This field can only be set when creating or updating a Service to type `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-class

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#load_balancer_class Service#load_balancer_class}

---

###### `load_balancer_ip`<sup>Optional</sup> <a name="load_balancer_ip" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.loadBalancerIp"></a>

- *Type:* str

Only applies to `type = LoadBalancer`.

LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying this field when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#load_balancer_ip Service#load_balancer_ip}

---

###### `load_balancer_source_ranges`<sup>Optional</sup> <a name="load_balancer_source_ranges" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.loadBalancerSourceRanges"></a>

- *Type:* typing.List[str]

If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.

This field will be ignored if the cloud-provider does not support the feature. More info: http://kubernetes.io/docs/user-guide/services-firewalls

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#load_balancer_source_ranges Service#load_balancer_source_ranges}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.port"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort">ServiceSpecPort</a>]]

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#port Service#port}

---

###### `publish_not_ready_addresses`<sup>Optional</sup> <a name="publish_not_ready_addresses" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.publishNotReadyAddresses"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service.

The default value is `false`. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate `SRV` records for its Pods without respect to their readiness for purpose of peer discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#publish_not_ready_addresses Service#publish_not_ready_addresses}

---

###### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.selector"></a>

- *Type:* typing.Mapping[str]

Route service traffic to pods with label keys and values matching this selector.

Only applies to types `ClusterIP`, `NodePort`, and `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#selector Service#selector}

---

###### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.sessionAffinity"></a>

- *Type:* str

Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#session_affinity Service#session_affinity}

---

###### `session_affinity_config`<sup>Optional</sup> <a name="session_affinity_config" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.sessionAffinityConfig"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a>

session_affinity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#session_affinity_config Service#session_affinity_config}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.type"></a>

- *Type:* str

Determines how the service is exposed.

Defaults to `ClusterIP`. Valid options are `ExternalName`, `ClusterIP`, `NodePort`, and `LoadBalancer`. `ExternalName` maps to the specified `external_name`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#type Service#type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.service.Service.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.service.Service.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#create Service#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.service.Service.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.service.Service.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_for_load_balancer` <a name="reset_wait_for_load_balancer" id="@cdktf/provider-kubernetes.service.Service.resetWaitForLoadBalancer"></a>

```python
def reset_wait_for_load_balancer() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.service.Service.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.Service.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.service.Service.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.service.Service.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.Service.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.service.Service.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.Service.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.service.Service.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.Service.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Service to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference">ServiceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference">ServiceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.status">status</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList">ServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference">ServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.waitForLoadBalancerInput">wait_for_load_balancer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.waitForLoadBalancer">wait_for_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.service.Service.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.service.Service.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.Service.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.service.Service.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.service.Service.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.service.Service.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.service.Service.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.service.Service.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.service.Service.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.service.Service.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.service.Service.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.service.Service.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.service.Service.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.service.Service.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.service.Service.property.metadata"></a>

```python
metadata: ServiceMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference">ServiceMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.service.Service.property.spec"></a>

```python
spec: ServiceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference">ServiceSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-kubernetes.service.Service.property.status"></a>

```python
status: ServiceStatusList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatusList">ServiceStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.service.Service.property.timeouts"></a>

```python
timeouts: ServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference">ServiceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.service.Service.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.service.Service.property.metadataInput"></a>

```python
metadata_input: ServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.service.Service.property.specInput"></a>

```python
spec_input: ServiceSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.service.Service.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a>]

---

##### `wait_for_load_balancer_input`<sup>Optional</sup> <a name="wait_for_load_balancer_input" id="@cdktf/provider-kubernetes.service.Service.property.waitForLoadBalancerInput"></a>

```python
wait_for_load_balancer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.service.Service.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `wait_for_load_balancer`<sup>Required</sup> <a name="wait_for_load_balancer" id="@cdktf/provider-kubernetes.service.Service.property.waitForLoadBalancer"></a>

```python
wait_for_load_balancer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.service.Service.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-kubernetes.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ServiceMetadata,
  spec: ServiceSpec,
  id: str = None,
  timeouts: ServiceTimeouts = None,
  wait_for_load_balancer: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.waitForLoadBalancer">wait_for_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.metadata"></a>

```python
metadata: ServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#metadata Service#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.spec"></a>

```python
spec: ServiceSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#spec Service#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.timeouts"></a>

```python
timeouts: ServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#timeouts Service#timeouts}

---

##### `wait_for_load_balancer`<sup>Optional</sup> <a name="wait_for_load_balancer" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.waitForLoadBalancer"></a>

```python
wait_for_load_balancer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#wait_for_load_balancer Service#wait_for_load_balancer}

---

### ServiceMetadata <a name="ServiceMetadata" id="@cdktf/provider-kubernetes.service.ServiceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceMetadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the service that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata.property.name">name</a></code> | <code>str</code> | Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the service must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.service.ServiceMetadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the service that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#annotations Service#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.service.ServiceMetadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#generate_name Service#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.service.ServiceMetadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the service.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#labels Service#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.service.ServiceMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#name Service#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.service.ServiceMetadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the service must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#namespace Service#namespace}

---

### ServiceSpec <a name="ServiceSpec" id="@cdktf/provider-kubernetes.service.ServiceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceSpec(
  allocate_load_balancer_node_ports: typing.Union[bool, IResolvable] = None,
  cluster_ip: str = None,
  cluster_ips: typing.List[str] = None,
  external_ips: typing.List[str] = None,
  external_name: str = None,
  external_traffic_policy: str = None,
  health_check_node_port: typing.Union[int, float] = None,
  internal_traffic_policy: str = None,
  ip_families: typing.List[str] = None,
  ip_family_policy: str = None,
  load_balancer_class: str = None,
  load_balancer_ip: str = None,
  load_balancer_source_ranges: typing.List[str] = None,
  port: typing.Union[IResolvable, typing.List[ServiceSpecPort]] = None,
  publish_not_ready_addresses: typing.Union[bool, IResolvable] = None,
  selector: typing.Mapping[str] = None,
  session_affinity: str = None,
  session_affinity_config: ServiceSpecSessionAffinityConfig = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.allocateLoadBalancerNodePorts">allocate_load_balancer_node_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.clusterIp">cluster_ip</a></code> | <code>str</code> | The IP address of the service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.clusterIps">cluster_ips</a></code> | <code>typing.List[str]</code> | List of IP addresses assigned to this service, and are usually assigned randomly. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.externalIps">external_ips</a></code> | <code>typing.List[str]</code> | A list of IP addresses for which nodes in the cluster will also accept traffic for this service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.externalName">external_name</a></code> | <code>str</code> | The external reference that kubedns or equivalent will return as a CNAME record for this service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.externalTrafficPolicy">external_traffic_policy</a></code> | <code>str</code> | Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.healthCheckNodePort">health_check_node_port</a></code> | <code>typing.Union[int, float]</code> | Specifies the Healthcheck NodePort for the service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.internalTrafficPolicy">internal_traffic_policy</a></code> | <code>str</code> | Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.ipFamilies">ip_families</a></code> | <code>typing.List[str]</code> | IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.ipFamilyPolicy">ip_family_policy</a></code> | <code>str</code> | IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerClass">load_balancer_class</a></code> | <code>str</code> | The class of the load balancer implementation this Service belongs to. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerIp">load_balancer_ip</a></code> | <code>str</code> | Only applies to `type = LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerSourceRanges">load_balancer_source_ranges</a></code> | <code>typing.List[str]</code> | If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.port">port</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort">ServiceSpecPort</a>]]</code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.publishNotReadyAddresses">publish_not_ready_addresses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.selector">selector</a></code> | <code>typing.Mapping[str]</code> | Route service traffic to pods with label keys and values matching this selector. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.sessionAffinityConfig">session_affinity_config</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a></code> | session_affinity_config block. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.type">type</a></code> | <code>str</code> | Determines how the service is exposed. |

---

##### `allocate_load_balancer_node_ports`<sup>Optional</sup> <a name="allocate_load_balancer_node_ports" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.allocateLoadBalancerNodePorts"></a>

```python
allocate_load_balancer_node_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`.

It may be set to `false` if the cluster load-balancer does not rely on `NodePorts`.  If the caller requests specific `NodePorts` (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type `LoadBalancer`. Default is `true`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-nodeport-allocation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#allocate_load_balancer_node_ports Service#allocate_load_balancer_node_ports}

---

##### `cluster_ip`<sup>Optional</sup> <a name="cluster_ip" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.clusterIp"></a>

```python
cluster_ip: str
```

- *Type:* str

The IP address of the service.

It is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. `None` can be specified for headless services when proxying is not required. Ignored if type is `ExternalName`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#cluster_ip Service#cluster_ip}

---

##### `cluster_ips`<sup>Optional</sup> <a name="cluster_ips" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.clusterIps"></a>

```python
cluster_ips: typing.List[str]
```

- *Type:* typing.List[str]

List of IP addresses assigned to this service, and are usually assigned randomly.

If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise creation of the service will fail. If this field is not specified, it will be initialized from the `clusterIP` field. If this field is specified, clients must ensure that `clusterIPs[0]` and `clusterIP` have the same value. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#cluster_ips Service#cluster_ips}

---

##### `external_ips`<sup>Optional</sup> <a name="external_ips" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.externalIps"></a>

```python
external_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of IP addresses for which nodes in the cluster will also accept traffic for this service.

These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#external_ips Service#external_ips}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

The external reference that kubedns or equivalent will return as a CNAME record for this service.

No proxying will be involved. Must be a valid DNS name and requires `type` to be `ExternalName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#external_name Service#external_name}

---

##### `external_traffic_policy`<sup>Optional</sup> <a name="external_traffic_policy" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.externalTrafficPolicy"></a>

```python
external_traffic_policy: str
```

- *Type:* str

Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints.

`Local` preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. `Cluster` obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. More info: https://kubernetes.io/docs/tutorials/services/source-ip/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#external_traffic_policy Service#external_traffic_policy}

---

##### `health_check_node_port`<sup>Optional</sup> <a name="health_check_node_port" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.healthCheckNodePort"></a>

```python
health_check_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the Healthcheck NodePort for the service.

Only effects when type is set to `LoadBalancer` and external_traffic_policy is set to `Local`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#health_check_node_port Service#health_check_node_port}

---

##### `internal_traffic_policy`<sup>Optional</sup> <a name="internal_traffic_policy" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.internalTrafficPolicy"></a>

```python
internal_traffic_policy: str
```

- *Type:* str

Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only.

`Cluster` routes internal traffic to a Service to all endpoints. `Local` routes traffic to node-local endpoints only, traffic is dropped if no node-local endpoints are ready. The default value is `Cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#internal_traffic_policy Service#internal_traffic_policy}

---

##### `ip_families`<sup>Optional</sup> <a name="ip_families" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.ipFamilies"></a>

```python
ip_families: typing.List[str]
```

- *Type:* typing.List[str]

IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#ip_families Service#ip_families}

---

##### `ip_family_policy`<sup>Optional</sup> <a name="ip_family_policy" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.ipFamilyPolicy"></a>

```python
ip_family_policy: str
```

- *Type:* str

IPFamilyPolicy represents the dual-stack-ness requested or required by this Service.

If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#ip_family_policy Service#ip_family_policy}

---

##### `load_balancer_class`<sup>Optional</sup> <a name="load_balancer_class" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerClass"></a>

```python
load_balancer_class: str
```

- *Type:* str

The class of the load balancer implementation this Service belongs to.

If specified, the value of this field must be a label-style identifier, with an optional prefix. This field can only be set when the Service type is `LoadBalancer`. If not set, the default load balancer implementation is used. This field can only be set when creating or updating a Service to type `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-class

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#load_balancer_class Service#load_balancer_class}

---

##### `load_balancer_ip`<sup>Optional</sup> <a name="load_balancer_ip" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerIp"></a>

```python
load_balancer_ip: str
```

- *Type:* str

Only applies to `type = LoadBalancer`.

LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying this field when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#load_balancer_ip Service#load_balancer_ip}

---

##### `load_balancer_source_ranges`<sup>Optional</sup> <a name="load_balancer_source_ranges" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerSourceRanges"></a>

```python
load_balancer_source_ranges: typing.List[str]
```

- *Type:* typing.List[str]

If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.

This field will be ignored if the cloud-provider does not support the feature. More info: http://kubernetes.io/docs/user-guide/services-firewalls

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#load_balancer_source_ranges Service#load_balancer_source_ranges}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.port"></a>

```python
port: typing.Union[IResolvable, typing.List[ServiceSpecPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort">ServiceSpecPort</a>]]

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#port Service#port}

---

##### `publish_not_ready_addresses`<sup>Optional</sup> <a name="publish_not_ready_addresses" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.publishNotReadyAddresses"></a>

```python
publish_not_ready_addresses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service.

The default value is `false`. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate `SRV` records for its Pods without respect to their readiness for purpose of peer discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#publish_not_ready_addresses Service#publish_not_ready_addresses}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.selector"></a>

```python
selector: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Route service traffic to pods with label keys and values matching this selector.

Only applies to types `ClusterIP`, `NodePort`, and `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#selector Service#selector}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#session_affinity Service#session_affinity}

---

##### `session_affinity_config`<sup>Optional</sup> <a name="session_affinity_config" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.sessionAffinityConfig"></a>

```python
session_affinity_config: ServiceSpecSessionAffinityConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a>

session_affinity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#session_affinity_config Service#session_affinity_config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.type"></a>

```python
type: str
```

- *Type:* str

Determines how the service is exposed.

Defaults to `ClusterIP`. Valid options are `ExternalName`, `ClusterIP`, `NodePort`, and `LoadBalancer`. `ExternalName` maps to the specified `external_name`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#type Service#type}

---

### ServiceSpecPort <a name="ServiceSpecPort" id="@cdktf/provider-kubernetes.service.ServiceSpecPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceSpecPort(
  port: typing.Union[int, float],
  app_protocol: str = None,
  name: str = None,
  node_port: typing.Union[int, float] = None,
  protocol: str = None,
  target_port: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port that will be exposed by this service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.appProtocol">app_protocol</a></code> | <code>str</code> | The application protocol for this port. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.name">name</a></code> | <code>str</code> | The name of this port within the service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.nodePort">node_port</a></code> | <code>typing.Union[int, float]</code> | The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.protocol">protocol</a></code> | <code>str</code> | The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.targetPort">target_port</a></code> | <code>str</code> | Number or name of the port to access on the pods targeted by the service. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that will be exposed by this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#port Service#port}

---

##### `app_protocol`<sup>Optional</sup> <a name="app_protocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.appProtocol"></a>

```python
app_protocol: str
```

- *Type:* str

The application protocol for this port.

This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#app_protocol Service#app_protocol}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this port within the service.

All ports within the service must have unique names. Optional if only one ServicePort is defined on this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#name Service#name}

---

##### `node_port`<sup>Optional</sup> <a name="node_port" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.nodePort"></a>

```python
node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`.

Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the `type` of this service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#node_port Service#node_port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#protocol Service#protocol}

---

##### `target_port`<sup>Optional</sup> <a name="target_port" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.targetPort"></a>

```python
target_port: str
```

- *Type:* str

Number or name of the port to access on the pods targeted by the service.

Number must be in the range 1 to 65535. This field is ignored for services with `cluster_ip = "None"`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#target_port Service#target_port}

---

### ServiceSpecSessionAffinityConfig <a name="ServiceSpecSessionAffinityConfig" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceSpecSessionAffinityConfig(
  client_ip: ServiceSpecSessionAffinityConfigClientIp = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig.property.clientIp">client_ip</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a></code> | client_ip block. |

---

##### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig.property.clientIp"></a>

```python
client_ip: ServiceSpecSessionAffinityConfigClientIp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a>

client_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#client_ip Service#client_ip}

---

### ServiceSpecSessionAffinityConfigClientIp <a name="ServiceSpecSessionAffinityConfigClientIp" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceSpecSessionAffinityConfigClientIp(
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the seconds of `ClientIP` type session sticky time. |

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the seconds of `ClientIP` type session sticky time.

The value must be > 0 and <= 86400(for 1 day) if `ServiceAffinity` == `ClientIP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#timeout_seconds Service#timeout_seconds}

---

### ServiceStatus <a name="ServiceStatus" id="@cdktf/provider-kubernetes.service.ServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceStatus()
```


### ServiceStatusLoadBalancer <a name="ServiceStatusLoadBalancer" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceStatusLoadBalancer()
```


### ServiceStatusLoadBalancerIngress <a name="ServiceStatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngress.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceStatusLoadBalancerIngress()
```


### ServiceTimeouts <a name="ServiceTimeouts" id="@cdktf/provider-kubernetes.service.ServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#create Service#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.service.ServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#create Service#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMetadataOutputReference <a name="ServiceMetadataOutputReference" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a>

---


### ServiceSpecOutputReference <a name="ServiceSpecOutputReference" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putPort">put_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putSessionAffinityConfig">put_session_affinity_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetAllocateLoadBalancerNodePorts">reset_allocate_load_balancer_node_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetClusterIp">reset_cluster_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetClusterIps">reset_cluster_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalIps">reset_external_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalName">reset_external_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalTrafficPolicy">reset_external_traffic_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetHealthCheckNodePort">reset_health_check_node_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetInternalTrafficPolicy">reset_internal_traffic_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetIpFamilies">reset_ip_families</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetIpFamilyPolicy">reset_ip_family_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerClass">reset_load_balancer_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerIp">reset_load_balancer_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerSourceRanges">reset_load_balancer_source_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetPublishNotReadyAddresses">reset_publish_not_ready_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSessionAffinity">reset_session_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSessionAffinityConfig">reset_session_affinity_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_port` <a name="put_port" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putPort"></a>

```python
def put_port(
  value: typing.Union[IResolvable, typing.List[ServiceSpecPort]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putPort.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort">ServiceSpecPort</a>]]

---

##### `put_session_affinity_config` <a name="put_session_affinity_config" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putSessionAffinityConfig"></a>

```python
def put_session_affinity_config(
  client_ip: ServiceSpecSessionAffinityConfigClientIp = None
) -> None
```

###### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putSessionAffinityConfig.parameter.clientIp"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a>

client_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#client_ip Service#client_ip}

---

##### `reset_allocate_load_balancer_node_ports` <a name="reset_allocate_load_balancer_node_ports" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetAllocateLoadBalancerNodePorts"></a>

```python
def reset_allocate_load_balancer_node_ports() -> None
```

##### `reset_cluster_ip` <a name="reset_cluster_ip" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetClusterIp"></a>

```python
def reset_cluster_ip() -> None
```

##### `reset_cluster_ips` <a name="reset_cluster_ips" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetClusterIps"></a>

```python
def reset_cluster_ips() -> None
```

##### `reset_external_ips` <a name="reset_external_ips" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalIps"></a>

```python
def reset_external_ips() -> None
```

##### `reset_external_name` <a name="reset_external_name" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalName"></a>

```python
def reset_external_name() -> None
```

##### `reset_external_traffic_policy` <a name="reset_external_traffic_policy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalTrafficPolicy"></a>

```python
def reset_external_traffic_policy() -> None
```

##### `reset_health_check_node_port` <a name="reset_health_check_node_port" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetHealthCheckNodePort"></a>

```python
def reset_health_check_node_port() -> None
```

##### `reset_internal_traffic_policy` <a name="reset_internal_traffic_policy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetInternalTrafficPolicy"></a>

```python
def reset_internal_traffic_policy() -> None
```

##### `reset_ip_families` <a name="reset_ip_families" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetIpFamilies"></a>

```python
def reset_ip_families() -> None
```

##### `reset_ip_family_policy` <a name="reset_ip_family_policy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetIpFamilyPolicy"></a>

```python
def reset_ip_family_policy() -> None
```

##### `reset_load_balancer_class` <a name="reset_load_balancer_class" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerClass"></a>

```python
def reset_load_balancer_class() -> None
```

##### `reset_load_balancer_ip` <a name="reset_load_balancer_ip" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerIp"></a>

```python
def reset_load_balancer_ip() -> None
```

##### `reset_load_balancer_source_ranges` <a name="reset_load_balancer_source_ranges" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerSourceRanges"></a>

```python
def reset_load_balancer_source_ranges() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_publish_not_ready_addresses` <a name="reset_publish_not_ready_addresses" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetPublishNotReadyAddresses"></a>

```python
def reset_publish_not_ready_addresses() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_session_affinity` <a name="reset_session_affinity" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSessionAffinity"></a>

```python
def reset_session_affinity() -> None
```

##### `reset_session_affinity_config` <a name="reset_session_affinity_config" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSessionAffinityConfig"></a>

```python
def reset_session_affinity_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList">ServiceSpecPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityConfig">session_affinity_config</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference">ServiceSpecSessionAffinityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.allocateLoadBalancerNodePortsInput">allocate_load_balancer_node_ports_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIpInput">cluster_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIpsInput">cluster_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalIpsInput">external_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalNameInput">external_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalTrafficPolicyInput">external_traffic_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.healthCheckNodePortInput">health_check_node_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalTrafficPolicyInput">internal_traffic_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamiliesInput">ip_families_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilyPolicyInput">ip_family_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerClassInput">load_balancer_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerIpInput">load_balancer_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerSourceRangesInput">load_balancer_source_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort">ServiceSpecPort</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.publishNotReadyAddressesInput">publish_not_ready_addresses_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.selectorInput">selector_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityConfigInput">session_affinity_config_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityInput">session_affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.allocateLoadBalancerNodePorts">allocate_load_balancer_node_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIp">cluster_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIps">cluster_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalIps">external_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalName">external_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalTrafficPolicy">external_traffic_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.healthCheckNodePort">health_check_node_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalTrafficPolicy">internal_traffic_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilies">ip_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilyPolicy">ip_family_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerClass">load_balancer_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerIp">load_balancer_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerSourceRanges">load_balancer_source_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.publishNotReadyAddresses">publish_not_ready_addresses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.selector">selector</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.port"></a>

```python
port: ServiceSpecPortList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList">ServiceSpecPortList</a>

---

##### `session_affinity_config`<sup>Required</sup> <a name="session_affinity_config" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityConfig"></a>

```python
session_affinity_config: ServiceSpecSessionAffinityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference">ServiceSpecSessionAffinityConfigOutputReference</a>

---

##### `allocate_load_balancer_node_ports_input`<sup>Optional</sup> <a name="allocate_load_balancer_node_ports_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.allocateLoadBalancerNodePortsInput"></a>

```python
allocate_load_balancer_node_ports_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_ip_input`<sup>Optional</sup> <a name="cluster_ip_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIpInput"></a>

```python
cluster_ip_input: str
```

- *Type:* str

---

##### `cluster_ips_input`<sup>Optional</sup> <a name="cluster_ips_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIpsInput"></a>

```python
cluster_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_ips_input`<sup>Optional</sup> <a name="external_ips_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalIpsInput"></a>

```python
external_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name_input`<sup>Optional</sup> <a name="external_name_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalNameInput"></a>

```python
external_name_input: str
```

- *Type:* str

---

##### `external_traffic_policy_input`<sup>Optional</sup> <a name="external_traffic_policy_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalTrafficPolicyInput"></a>

```python
external_traffic_policy_input: str
```

- *Type:* str

---

##### `health_check_node_port_input`<sup>Optional</sup> <a name="health_check_node_port_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.healthCheckNodePortInput"></a>

```python
health_check_node_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_traffic_policy_input`<sup>Optional</sup> <a name="internal_traffic_policy_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalTrafficPolicyInput"></a>

```python
internal_traffic_policy_input: str
```

- *Type:* str

---

##### `ip_families_input`<sup>Optional</sup> <a name="ip_families_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamiliesInput"></a>

```python
ip_families_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_family_policy_input`<sup>Optional</sup> <a name="ip_family_policy_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilyPolicyInput"></a>

```python
ip_family_policy_input: str
```

- *Type:* str

---

##### `load_balancer_class_input`<sup>Optional</sup> <a name="load_balancer_class_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerClassInput"></a>

```python
load_balancer_class_input: str
```

- *Type:* str

---

##### `load_balancer_ip_input`<sup>Optional</sup> <a name="load_balancer_ip_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerIpInput"></a>

```python
load_balancer_ip_input: str
```

- *Type:* str

---

##### `load_balancer_source_ranges_input`<sup>Optional</sup> <a name="load_balancer_source_ranges_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerSourceRangesInput"></a>

```python
load_balancer_source_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.portInput"></a>

```python
port_input: typing.Union[IResolvable, typing.List[ServiceSpecPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort">ServiceSpecPort</a>]]

---

##### `publish_not_ready_addresses_input`<sup>Optional</sup> <a name="publish_not_ready_addresses_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.publishNotReadyAddressesInput"></a>

```python
publish_not_ready_addresses_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.selectorInput"></a>

```python
selector_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `session_affinity_config_input`<sup>Optional</sup> <a name="session_affinity_config_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityConfigInput"></a>

```python
session_affinity_config_input: ServiceSpecSessionAffinityConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a>

---

##### `session_affinity_input`<sup>Optional</sup> <a name="session_affinity_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityInput"></a>

```python
session_affinity_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `allocate_load_balancer_node_ports`<sup>Required</sup> <a name="allocate_load_balancer_node_ports" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.allocateLoadBalancerNodePorts"></a>

```python
allocate_load_balancer_node_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_ip`<sup>Required</sup> <a name="cluster_ip" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIp"></a>

```python
cluster_ip: str
```

- *Type:* str

---

##### `cluster_ips`<sup>Required</sup> <a name="cluster_ips" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIps"></a>

```python
cluster_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_ips`<sup>Required</sup> <a name="external_ips" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalIps"></a>

```python
external_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name`<sup>Required</sup> <a name="external_name" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

---

##### `external_traffic_policy`<sup>Required</sup> <a name="external_traffic_policy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalTrafficPolicy"></a>

```python
external_traffic_policy: str
```

- *Type:* str

---

##### `health_check_node_port`<sup>Required</sup> <a name="health_check_node_port" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.healthCheckNodePort"></a>

```python
health_check_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_traffic_policy`<sup>Required</sup> <a name="internal_traffic_policy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalTrafficPolicy"></a>

```python
internal_traffic_policy: str
```

- *Type:* str

---

##### `ip_families`<sup>Required</sup> <a name="ip_families" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilies"></a>

```python
ip_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_family_policy`<sup>Required</sup> <a name="ip_family_policy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilyPolicy"></a>

```python
ip_family_policy: str
```

- *Type:* str

---

##### `load_balancer_class`<sup>Required</sup> <a name="load_balancer_class" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerClass"></a>

```python
load_balancer_class: str
```

- *Type:* str

---

##### `load_balancer_ip`<sup>Required</sup> <a name="load_balancer_ip" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerIp"></a>

```python
load_balancer_ip: str
```

- *Type:* str

---

##### `load_balancer_source_ranges`<sup>Required</sup> <a name="load_balancer_source_ranges" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerSourceRanges"></a>

```python
load_balancer_source_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publish_not_ready_addresses`<sup>Required</sup> <a name="publish_not_ready_addresses" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.publishNotReadyAddresses"></a>

```python
publish_not_ready_addresses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.selector"></a>

```python
selector: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `session_affinity`<sup>Required</sup> <a name="session_affinity" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalValue"></a>

```python
internal_value: ServiceSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a>

---


### ServiceSpecPortList <a name="ServiceSpecPortList" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceSpecPortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceSpecPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort">ServiceSpecPort</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceSpecPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort">ServiceSpecPort</a>]]

---


### ServiceSpecPortOutputReference <a name="ServiceSpecPortOutputReference" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceSpecPortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetAppProtocol">reset_app_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetNodePort">reset_node_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetTargetPort">reset_target_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_protocol` <a name="reset_app_protocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetAppProtocol"></a>

```python
def reset_app_protocol() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_node_port` <a name="reset_node_port" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetNodePort"></a>

```python
def reset_node_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_target_port` <a name="reset_target_port" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetTargetPort"></a>

```python
def reset_target_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.appProtocolInput">app_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nodePortInput">node_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.targetPortInput">target_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.appProtocol">app_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nodePort">node_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.targetPort">target_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort">ServiceSpecPort</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_protocol_input`<sup>Optional</sup> <a name="app_protocol_input" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.appProtocolInput"></a>

```python
app_protocol_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_port_input`<sup>Optional</sup> <a name="node_port_input" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nodePortInput"></a>

```python
node_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `target_port_input`<sup>Optional</sup> <a name="target_port_input" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.targetPortInput"></a>

```python
target_port_input: str
```

- *Type:* str

---

##### `app_protocol`<sup>Required</sup> <a name="app_protocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.appProtocol"></a>

```python
app_protocol: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_port`<sup>Required</sup> <a name="node_port" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nodePort"></a>

```python
node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.targetPort"></a>

```python
target_port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceSpecPort]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort">ServiceSpecPort</a>]

---


### ServiceSpecSessionAffinityConfigClientIpOutputReference <a name="ServiceSpecSessionAffinityConfigClientIpOutputReference" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceSpecSessionAffinityConfigClientIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.internalValue"></a>

```python
internal_value: ServiceSpecSessionAffinityConfigClientIp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a>

---


### ServiceSpecSessionAffinityConfigOutputReference <a name="ServiceSpecSessionAffinityConfigOutputReference" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceSpecSessionAffinityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.putClientIp">put_client_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.resetClientIp">reset_client_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_ip` <a name="put_client_ip" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.putClientIp"></a>

```python
def put_client_ip(
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.putClientIp.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the seconds of `ClientIP` type session sticky time.

The value must be > 0 and <= 86400(for 1 day) if `ServiceAffinity` == `ClientIP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/service#timeout_seconds Service#timeout_seconds}

---

##### `reset_client_ip` <a name="reset_client_ip" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.resetClientIp"></a>

```python
def reset_client_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.clientIp">client_ip</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference">ServiceSpecSessionAffinityConfigClientIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.clientIpInput">client_ip_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_ip`<sup>Required</sup> <a name="client_ip" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.clientIp"></a>

```python
client_ip: ServiceSpecSessionAffinityConfigClientIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference">ServiceSpecSessionAffinityConfigClientIpOutputReference</a>

---

##### `client_ip_input`<sup>Optional</sup> <a name="client_ip_input" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.clientIpInput"></a>

```python
client_ip_input: ServiceSpecSessionAffinityConfigClientIp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServiceSpecSessionAffinityConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a>

---


### ServiceStatusList <a name="ServiceStatusList" id="@cdktf/provider-kubernetes.service.ServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.service.ServiceStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.service.ServiceStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServiceStatusLoadBalancerIngressList <a name="ServiceStatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceStatusLoadBalancerIngressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceStatusLoadBalancerIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServiceStatusLoadBalancerIngressOutputReference <a name="ServiceStatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceStatusLoadBalancerIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngress">ServiceStatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```python
internal_value: ServiceStatusLoadBalancerIngress
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngress">ServiceStatusLoadBalancerIngress</a>

---


### ServiceStatusLoadBalancerList <a name="ServiceStatusLoadBalancerList" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceStatusLoadBalancerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceStatusLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServiceStatusLoadBalancerOutputReference <a name="ServiceStatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceStatusLoadBalancerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList">ServiceStatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancer">ServiceStatusLoadBalancer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.ingress"></a>

```python
ingress: ServiceStatusLoadBalancerIngressList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList">ServiceStatusLoadBalancerIngressList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.internalValue"></a>

```python
internal_value: ServiceStatusLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancer">ServiceStatusLoadBalancer</a>

---


### ServiceStatusOutputReference <a name="ServiceStatusOutputReference" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList">ServiceStatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatus">ServiceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.loadBalancer"></a>

```python
load_balancer: ServiceStatusLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList">ServiceStatusLoadBalancerList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.internalValue"></a>

```python
internal_value: ServiceStatus
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatus">ServiceStatus</a>

---


### ServiceTimeoutsOutputReference <a name="ServiceTimeoutsOutputReference" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import service

service.ServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a>]

---



