# `kubernetes_ingress_v1`

Refer to the Terraform Registory for docs: [`kubernetes_ingress_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1).

# `ingressV1` Submodule <a name="`ingressV1` Submodule" id="@cdktf/provider-kubernetes.ingressV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IngressV1 <a name="IngressV1" id="@cdktf/provider-kubernetes.ingressV1.IngressV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1 kubernetes_ingress_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: IngressV1Metadata,
  spec: IngressV1Spec,
  id: str = None,
  timeouts: IngressV1Timeouts = None,
  wait_for_load_balancer: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#id IngressV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.waitForLoadBalancer">wait_for_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#metadata IngressV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#spec IngressV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#id IngressV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#timeouts IngressV1#timeouts}

---

##### `wait_for_load_balancer`<sup>Optional</sup> <a name="wait_for_load_balancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.Initializer.parameter.waitForLoadBalancer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#wait_for_load_balancer IngressV1#wait_for_load_balancer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.resetWaitForLoadBalancer">reset_wait_for_load_balancer</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the ingress that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#annotations IngressV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#generate_name IngressV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the ingress.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#labels IngressV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the ingress must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#namespace IngressV1#namespace}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putSpec"></a>

```python
def put_spec(
  default_backend: IngressV1SpecDefaultBackend = None,
  ingress_class_name: str = None,
  rule: typing.Union[IResolvable, typing.List[IngressV1SpecRule]] = None,
  tls: typing.Union[IResolvable, typing.List[IngressV1SpecTls]] = None
) -> None
```

###### `default_backend`<sup>Optional</sup> <a name="default_backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putSpec.parameter.defaultBackend"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a>

default_backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#default_backend IngressV1#default_backend}

---

###### `ingress_class_name`<sup>Optional</sup> <a name="ingress_class_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putSpec.parameter.ingressClassName"></a>

- *Type:* str

IngressClassName is the name of an IngressClass cluster resource.

Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#ingress_class_name IngressV1#ingress_class_name}

---

###### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putSpec.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule">IngressV1SpecRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#rule IngressV1#rule}

---

###### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putSpec.parameter.tls"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls">IngressV1SpecTls</a>]]

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#tls IngressV1#tls}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#create IngressV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#delete IngressV1#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_for_load_balancer` <a name="reset_wait_for_load_balancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.resetWaitForLoadBalancer"></a>

```python
def reset_wait_for_load_balancer() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference">IngressV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference">IngressV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.status">status</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList">IngressV1StatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference">IngressV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.waitForLoadBalancerInput">wait_for_load_balancer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.waitForLoadBalancer">wait_for_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.metadata"></a>

```python
metadata: IngressV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference">IngressV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.spec"></a>

```python
spec: IngressV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference">IngressV1SpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.status"></a>

```python
status: IngressV1StatusList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList">IngressV1StatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.timeouts"></a>

```python
timeouts: IngressV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference">IngressV1TimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.metadataInput"></a>

```python
metadata_input: IngressV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.specInput"></a>

```python
spec_input: IngressV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IngressV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a>]

---

##### `wait_for_load_balancer_input`<sup>Optional</sup> <a name="wait_for_load_balancer_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.waitForLoadBalancerInput"></a>

```python
wait_for_load_balancer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `wait_for_load_balancer`<sup>Required</sup> <a name="wait_for_load_balancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.waitForLoadBalancer"></a>

```python
wait_for_load_balancer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.ingressV1.IngressV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IngressV1Config <a name="IngressV1Config" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: IngressV1Metadata,
  spec: IngressV1Spec,
  id: str = None,
  timeouts: IngressV1Timeouts = None,
  wait_for_load_balancer: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#id IngressV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.waitForLoadBalancer">wait_for_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.metadata"></a>

```python
metadata: IngressV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#metadata IngressV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.spec"></a>

```python
spec: IngressV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#spec IngressV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#id IngressV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.timeouts"></a>

```python
timeouts: IngressV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#timeouts IngressV1#timeouts}

---

##### `wait_for_load_balancer`<sup>Optional</sup> <a name="wait_for_load_balancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Config.property.waitForLoadBalancer"></a>

```python
wait_for_load_balancer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#wait_for_load_balancer IngressV1#wait_for_load_balancer}

---

### IngressV1Metadata <a name="IngressV1Metadata" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1Metadata(
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
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the ingress must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the ingress that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#annotations IngressV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#generate_name IngressV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the ingress.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#labels IngressV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the ingress must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#namespace IngressV1#namespace}

---

### IngressV1Spec <a name="IngressV1Spec" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1Spec(
  default_backend: IngressV1SpecDefaultBackend = None,
  ingress_class_name: str = None,
  rule: typing.Union[IResolvable, typing.List[IngressV1SpecRule]] = None,
  tls: typing.Union[IResolvable, typing.List[IngressV1SpecTls]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.defaultBackend">default_backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a></code> | default_backend block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.ingressClassName">ingress_class_name</a></code> | <code>str</code> | IngressClassName is the name of an IngressClass cluster resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule">IngressV1SpecRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.tls">tls</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls">IngressV1SpecTls</a>]]</code> | tls block. |

---

##### `default_backend`<sup>Optional</sup> <a name="default_backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.defaultBackend"></a>

```python
default_backend: IngressV1SpecDefaultBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a>

default_backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#default_backend IngressV1#default_backend}

---

##### `ingress_class_name`<sup>Optional</sup> <a name="ingress_class_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.ingressClassName"></a>

```python
ingress_class_name: str
```

- *Type:* str

IngressClassName is the name of an IngressClass cluster resource.

Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#ingress_class_name IngressV1#ingress_class_name}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[IngressV1SpecRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule">IngressV1SpecRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#rule IngressV1#rule}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Spec.property.tls"></a>

```python
tls: typing.Union[IResolvable, typing.List[IngressV1SpecTls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls">IngressV1SpecTls</a>]]

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#tls IngressV1#tls}

---

### IngressV1SpecDefaultBackend <a name="IngressV1SpecDefaultBackend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecDefaultBackend(
  resource: IngressV1SpecDefaultBackendResource = None,
  service: IngressV1SpecDefaultBackendService = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a></code> | resource block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a></code> | service block. |

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend.property.resource"></a>

```python
resource: IngressV1SpecDefaultBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#resource IngressV1#resource}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend.property.service"></a>

```python
service: IngressV1SpecDefaultBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#service IngressV1#service}

---

### IngressV1SpecDefaultBackendResource <a name="IngressV1SpecDefaultBackendResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecDefaultBackendResource(
  api_group: str,
  kind: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.apiGroup">api_group</a></code> | <code>str</code> | APIGroup is the group for the resource being referenced. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.kind">kind</a></code> | <code>str</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.name">name</a></code> | <code>str</code> | The name of the User to bind to. |

---

##### `api_group`<sup>Required</sup> <a name="api_group" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.apiGroup"></a>

```python
api_group: str
```

- *Type:* str

APIGroup is the group for the resource being referenced.

If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#api_group IngressV1#api_group}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.kind"></a>

```python
kind: str
```

- *Type:* str

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#kind IngressV1#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

### IngressV1SpecDefaultBackendService <a name="IngressV1SpecDefaultBackendService" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecDefaultBackendService(
  name: str,
  port: IngressV1SpecDefaultBackendServicePort
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService.property.name">name</a></code> | <code>str</code> | Specifies the name of the referenced service. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a></code> | port block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService.property.port"></a>

```python
port: IngressV1SpecDefaultBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a>

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#port IngressV1#port}

---

### IngressV1SpecDefaultBackendServicePort <a name="IngressV1SpecDefaultBackendServicePort" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecDefaultBackendServicePort(
  name: str = None,
  number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort.property.name">name</a></code> | <code>str</code> | Specifies the name of the port of the referenced service. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort.property.number">number</a></code> | <code>typing.Union[int, float]</code> | Specifies the numerical port of the referenced service. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the numerical port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#number IngressV1#number}

---

### IngressV1SpecRule <a name="IngressV1SpecRule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRule(
  host: str = None,
  http: IngressV1SpecRuleHttp = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule.property.host">host</a></code> | <code>str</code> | Host is the fully qualified domain name of a network host, as defined by RFC 3986. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule.property.http">http</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a></code> | http block. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule.property.host"></a>

```python
host: str
```

- *Type:* str

Host is the fully qualified domain name of a network host, as defined by RFC 3986.

Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
the IP in the Spec of the parent Ingress.
2. The `:` delimiter is not respected because ports are not allowed.
Currently the port of an Ingress is implicitly :80 for http and
:443 for https.
Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.

Host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#host IngressV1#host}

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule.property.http"></a>

```python
http: IngressV1SpecRuleHttp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#http IngressV1#http}

---

### IngressV1SpecRuleHttp <a name="IngressV1SpecRuleHttp" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttp(
  path: typing.Union[IResolvable, typing.List[IngressV1SpecRuleHttpPath]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp.property.path">path</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath">IngressV1SpecRuleHttpPath</a>]]</code> | path block. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp.property.path"></a>

```python
path: typing.Union[IResolvable, typing.List[IngressV1SpecRuleHttpPath]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath">IngressV1SpecRuleHttpPath</a>]]

path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#path IngressV1#path}

---

### IngressV1SpecRuleHttpPath <a name="IngressV1SpecRuleHttpPath" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPath(
  backend: IngressV1SpecRuleHttpPathBackend = None,
  path: str = None,
  path_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a></code> | backend block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.path">path</a></code> | <code>str</code> | Path is matched against the path of an incoming request. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.pathType">path_type</a></code> | <code>str</code> | PathType determines the interpretation of the Path matching. |

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.backend"></a>

```python
backend: IngressV1SpecRuleHttpPathBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#backend IngressV1#backend}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.path"></a>

```python
path: str
```

- *Type:* str

Path is matched against the path of an incoming request.

Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/' and must be present when using PathType with value "Exact" or "Prefix".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#path IngressV1#path}

---

##### `path_type`<sup>Optional</sup> <a name="path_type" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath.property.pathType"></a>

```python
path_type: str
```

- *Type:* str

PathType determines the interpretation of the Path matching.

PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is
done on a path element by element basis. A path element refers is the
list of labels in the path split by the '/' separator. A request is a
match for path p if every p is an element-wise prefix of p of the
request path. Note that if the last element of the path is a substring
of the last element in request path, it is not a match (e.g. /foo/bar
matches /foo/bar/baz, but does not match /foo/barbaz).
ImplementationSpecific: Interpretation of the Path matching is up to
the IngressClass. Implementations can treat this as a separate PathType
or treat it identically to Prefix or Exact path types.
Implementations are required to support all path types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#path_type IngressV1#path_type}

---

### IngressV1SpecRuleHttpPathBackend <a name="IngressV1SpecRuleHttpPathBackend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPathBackend(
  resource: IngressV1SpecRuleHttpPathBackendResource = None,
  service: IngressV1SpecRuleHttpPathBackendService = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a></code> | resource block. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a></code> | service block. |

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend.property.resource"></a>

```python
resource: IngressV1SpecRuleHttpPathBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#resource IngressV1#resource}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend.property.service"></a>

```python
service: IngressV1SpecRuleHttpPathBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#service IngressV1#service}

---

### IngressV1SpecRuleHttpPathBackendResource <a name="IngressV1SpecRuleHttpPathBackendResource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPathBackendResource(
  api_group: str,
  kind: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.apiGroup">api_group</a></code> | <code>str</code> | APIGroup is the group for the resource being referenced. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.kind">kind</a></code> | <code>str</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.name">name</a></code> | <code>str</code> | The name of the User to bind to. |

---

##### `api_group`<sup>Required</sup> <a name="api_group" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.apiGroup"></a>

```python
api_group: str
```

- *Type:* str

APIGroup is the group for the resource being referenced.

If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#api_group IngressV1#api_group}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.kind"></a>

```python
kind: str
```

- *Type:* str

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#kind IngressV1#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

### IngressV1SpecRuleHttpPathBackendService <a name="IngressV1SpecRuleHttpPathBackendService" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPathBackendService(
  name: str,
  port: IngressV1SpecRuleHttpPathBackendServicePort
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService.property.name">name</a></code> | <code>str</code> | Specifies the name of the referenced service. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a></code> | port block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService.property.port"></a>

```python
port: IngressV1SpecRuleHttpPathBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a>

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#port IngressV1#port}

---

### IngressV1SpecRuleHttpPathBackendServicePort <a name="IngressV1SpecRuleHttpPathBackendServicePort" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPathBackendServicePort(
  name: str = None,
  number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort.property.name">name</a></code> | <code>str</code> | Specifies the name of the port of the referenced service. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort.property.number">number</a></code> | <code>typing.Union[int, float]</code> | Specifies the numerical port of the referenced service. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the numerical port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#number IngressV1#number}

---

### IngressV1SpecTls <a name="IngressV1SpecTls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecTls(
  hosts: typing.List[str] = None,
  secret_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | Hosts are a list of hosts included in the TLS certificate. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls.property.secretName">secret_name</a></code> | <code>str</code> | SecretName is the name of the secret used to terminate TLS traffic on port 443. |

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

Hosts are a list of hosts included in the TLS certificate.

The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#hosts IngressV1#hosts}

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

SecretName is the name of the secret used to terminate TLS traffic on port 443.

Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#secret_name IngressV1#secret_name}

---

### IngressV1Status <a name="IngressV1Status" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Status"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Status.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1Status()
```


### IngressV1StatusLoadBalancer <a name="IngressV1StatusLoadBalancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1StatusLoadBalancer()
```


### IngressV1StatusLoadBalancerIngress <a name="IngressV1StatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngress.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1StatusLoadBalancerIngress()
```


### IngressV1Timeouts <a name="IngressV1Timeouts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#create IngressV1#create}. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#delete IngressV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#create IngressV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#delete IngressV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IngressV1MetadataOutputReference <a name="IngressV1MetadataOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Metadata">IngressV1Metadata</a>

---


### IngressV1SpecDefaultBackendOutputReference <a name="IngressV1SpecDefaultBackendOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecDefaultBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putResource">put_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putService">put_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resetResource">reset_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource` <a name="put_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putResource"></a>

```python
def put_resource(
  api_group: str,
  kind: str,
  name: str
) -> None
```

###### `api_group`<sup>Required</sup> <a name="api_group" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putResource.parameter.apiGroup"></a>

- *Type:* str

APIGroup is the group for the resource being referenced.

If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#api_group IngressV1#api_group}

---

###### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putResource.parameter.kind"></a>

- *Type:* str

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#kind IngressV1#kind}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putResource.parameter.name"></a>

- *Type:* str

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

##### `put_service` <a name="put_service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putService"></a>

```python
def put_service(
  name: str,
  port: IngressV1SpecDefaultBackendServicePort
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putService.parameter.name"></a>

- *Type:* str

Specifies the name of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.putService.parameter.port"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a>

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#port IngressV1#port}

---

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference">IngressV1SpecDefaultBackendResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference">IngressV1SpecDefaultBackendServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.resourceInput">resource_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.serviceInput">service_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.resource"></a>

```python
resource: IngressV1SpecDefaultBackendResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference">IngressV1SpecDefaultBackendResourceOutputReference</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.service"></a>

```python
service: IngressV1SpecDefaultBackendServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference">IngressV1SpecDefaultBackendServiceOutputReference</a>

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.resourceInput"></a>

```python
resource_input: IngressV1SpecDefaultBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a>

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.serviceInput"></a>

```python
service_input: IngressV1SpecDefaultBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1SpecDefaultBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a>

---


### IngressV1SpecDefaultBackendResourceOutputReference <a name="IngressV1SpecDefaultBackendResourceOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecDefaultBackendResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.apiGroupInput">api_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.apiGroup">api_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_group_input`<sup>Optional</sup> <a name="api_group_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.apiGroupInput"></a>

```python
api_group_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `api_group`<sup>Required</sup> <a name="api_group" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.apiGroup"></a>

```python
api_group: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResourceOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1SpecDefaultBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a>

---


### IngressV1SpecDefaultBackendServiceOutputReference <a name="IngressV1SpecDefaultBackendServiceOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecDefaultBackendServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.putPort">put_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_port` <a name="put_port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.putPort"></a>

```python
def put_port(
  name: str = None,
  number: typing.Union[int, float] = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.putPort.parameter.name"></a>

- *Type:* str

Specifies the name of the port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

###### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.putPort.parameter.number"></a>

- *Type:* typing.Union[int, float]

Specifies the numerical port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#number IngressV1#number}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference">IngressV1SpecDefaultBackendServicePortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.portInput">port_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.port"></a>

```python
port: IngressV1SpecDefaultBackendServicePortOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference">IngressV1SpecDefaultBackendServicePortOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.portInput"></a>

```python
port_input: IngressV1SpecDefaultBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServiceOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1SpecDefaultBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a>

---


### IngressV1SpecDefaultBackendServicePortOutputReference <a name="IngressV1SpecDefaultBackendServicePortOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resetNumber">reset_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_number` <a name="reset_number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.resetNumber"></a>

```python
def reset_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.numberInput">number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.numberInput"></a>

```python
number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePortOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1SpecDefaultBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendServicePort">IngressV1SpecDefaultBackendServicePort</a>

---


### IngressV1SpecOutputReference <a name="IngressV1SpecOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putDefaultBackend">put_default_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putTls">put_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetDefaultBackend">reset_default_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetIngressClassName">reset_ingress_class_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetTls">reset_tls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_backend` <a name="put_default_backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putDefaultBackend"></a>

```python
def put_default_backend(
  resource: IngressV1SpecDefaultBackendResource = None,
  service: IngressV1SpecDefaultBackendService = None
) -> None
```

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putDefaultBackend.parameter.resource"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendResource">IngressV1SpecDefaultBackendResource</a>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#resource IngressV1#resource}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putDefaultBackend.parameter.service"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendService">IngressV1SpecDefaultBackendService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#service IngressV1#service}

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[IngressV1SpecRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule">IngressV1SpecRule</a>]]

---

##### `put_tls` <a name="put_tls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putTls"></a>

```python
def put_tls(
  value: typing.Union[IResolvable, typing.List[IngressV1SpecTls]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.putTls.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls">IngressV1SpecTls</a>]]

---

##### `reset_default_backend` <a name="reset_default_backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetDefaultBackend"></a>

```python
def reset_default_backend() -> None
```

##### `reset_ingress_class_name` <a name="reset_ingress_class_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetIngressClassName"></a>

```python
def reset_ingress_class_name() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.resetTls"></a>

```python
def reset_tls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.defaultBackend">default_backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference">IngressV1SpecDefaultBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList">IngressV1SpecRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList">IngressV1SpecTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.defaultBackendInput">default_backend_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ingressClassNameInput">ingress_class_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule">IngressV1SpecRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.tlsInput">tls_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls">IngressV1SpecTls</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ingressClassName">ingress_class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_backend`<sup>Required</sup> <a name="default_backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.defaultBackend"></a>

```python
default_backend: IngressV1SpecDefaultBackendOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackendOutputReference">IngressV1SpecDefaultBackendOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.rule"></a>

```python
rule: IngressV1SpecRuleList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList">IngressV1SpecRuleList</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.tls"></a>

```python
tls: IngressV1SpecTlsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList">IngressV1SpecTlsList</a>

---

##### `default_backend_input`<sup>Optional</sup> <a name="default_backend_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.defaultBackendInput"></a>

```python
default_backend_input: IngressV1SpecDefaultBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecDefaultBackend">IngressV1SpecDefaultBackend</a>

---

##### `ingress_class_name_input`<sup>Optional</sup> <a name="ingress_class_name_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ingressClassNameInput"></a>

```python
ingress_class_name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[IngressV1SpecRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule">IngressV1SpecRule</a>]]

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.tlsInput"></a>

```python
tls_input: typing.Union[IResolvable, typing.List[IngressV1SpecTls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls">IngressV1SpecTls</a>]]

---

##### `ingress_class_name`<sup>Required</sup> <a name="ingress_class_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.ingressClassName"></a>

```python
ingress_class_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Spec">IngressV1Spec</a>

---


### IngressV1SpecRuleHttpOutputReference <a name="IngressV1SpecRuleHttpOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.putPath">put_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_path` <a name="put_path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.putPath"></a>

```python
def put_path(
  value: typing.Union[IResolvable, typing.List[IngressV1SpecRuleHttpPath]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.putPath.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath">IngressV1SpecRuleHttpPath</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList">IngressV1SpecRuleHttpPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.pathInput">path_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath">IngressV1SpecRuleHttpPath</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.path"></a>

```python
path: IngressV1SpecRuleHttpPathList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList">IngressV1SpecRuleHttpPathList</a>

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.pathInput"></a>

```python
path_input: typing.Union[IResolvable, typing.List[IngressV1SpecRuleHttpPath]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath">IngressV1SpecRuleHttpPath</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1SpecRuleHttp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a>

---


### IngressV1SpecRuleHttpPathBackendOutputReference <a name="IngressV1SpecRuleHttpPathBackendOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putResource">put_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putService">put_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resetResource">reset_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource` <a name="put_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putResource"></a>

```python
def put_resource(
  api_group: str,
  kind: str,
  name: str
) -> None
```

###### `api_group`<sup>Required</sup> <a name="api_group" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putResource.parameter.apiGroup"></a>

- *Type:* str

APIGroup is the group for the resource being referenced.

If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#api_group IngressV1#api_group}

---

###### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putResource.parameter.kind"></a>

- *Type:* str

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#kind IngressV1#kind}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putResource.parameter.name"></a>

- *Type:* str

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

##### `put_service` <a name="put_service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putService"></a>

```python
def put_service(
  name: str,
  port: IngressV1SpecRuleHttpPathBackendServicePort
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putService.parameter.name"></a>

- *Type:* str

Specifies the name of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.putService.parameter.port"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a>

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#port IngressV1#port}

---

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference">IngressV1SpecRuleHttpPathBackendResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference">IngressV1SpecRuleHttpPathBackendServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.resourceInput">resource_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.serviceInput">service_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.resource"></a>

```python
resource: IngressV1SpecRuleHttpPathBackendResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference">IngressV1SpecRuleHttpPathBackendResourceOutputReference</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.service"></a>

```python
service: IngressV1SpecRuleHttpPathBackendServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference">IngressV1SpecRuleHttpPathBackendServiceOutputReference</a>

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.resourceInput"></a>

```python
resource_input: IngressV1SpecRuleHttpPathBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a>

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.serviceInput"></a>

```python
service_input: IngressV1SpecRuleHttpPathBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1SpecRuleHttpPathBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a>

---


### IngressV1SpecRuleHttpPathBackendResourceOutputReference <a name="IngressV1SpecRuleHttpPathBackendResourceOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.apiGroupInput">api_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.apiGroup">api_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_group_input`<sup>Optional</sup> <a name="api_group_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.apiGroupInput"></a>

```python
api_group_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `api_group`<sup>Required</sup> <a name="api_group" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.apiGroup"></a>

```python
api_group: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResourceOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1SpecRuleHttpPathBackendResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a>

---


### IngressV1SpecRuleHttpPathBackendServiceOutputReference <a name="IngressV1SpecRuleHttpPathBackendServiceOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.putPort">put_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_port` <a name="put_port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.putPort"></a>

```python
def put_port(
  name: str = None,
  number: typing.Union[int, float] = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.putPort.parameter.name"></a>

- *Type:* str

Specifies the name of the port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#name IngressV1#name}

---

###### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.putPort.parameter.number"></a>

- *Type:* typing.Union[int, float]

Specifies the numerical port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#number IngressV1#number}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference">IngressV1SpecRuleHttpPathBackendServicePortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.portInput">port_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.port"></a>

```python
port: IngressV1SpecRuleHttpPathBackendServicePortOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference">IngressV1SpecRuleHttpPathBackendServicePortOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.portInput"></a>

```python
port_input: IngressV1SpecRuleHttpPathBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServiceOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1SpecRuleHttpPathBackendService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a>

---


### IngressV1SpecRuleHttpPathBackendServicePortOutputReference <a name="IngressV1SpecRuleHttpPathBackendServicePortOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resetNumber">reset_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_number` <a name="reset_number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.resetNumber"></a>

```python
def reset_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.numberInput">number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.numberInput"></a>

```python
number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1SpecRuleHttpPathBackendServicePort
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendServicePort">IngressV1SpecRuleHttpPathBackendServicePort</a>

---


### IngressV1SpecRuleHttpPathList <a name="IngressV1SpecRuleHttpPathList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPathList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IngressV1SpecRuleHttpPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath">IngressV1SpecRuleHttpPath</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IngressV1SpecRuleHttpPath]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath">IngressV1SpecRuleHttpPath</a>]]

---


### IngressV1SpecRuleHttpPathOutputReference <a name="IngressV1SpecRuleHttpPathOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleHttpPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.putBackend">put_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetPathType">reset_path_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backend` <a name="put_backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.putBackend"></a>

```python
def put_backend(
  resource: IngressV1SpecRuleHttpPathBackendResource = None,
  service: IngressV1SpecRuleHttpPathBackendService = None
) -> None
```

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.putBackend.parameter.resource"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendResource">IngressV1SpecRuleHttpPathBackendResource</a>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#resource IngressV1#resource}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.putBackend.parameter.service"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendService">IngressV1SpecRuleHttpPathBackendService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#service IngressV1#service}

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_path_type` <a name="reset_path_type" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.resetPathType"></a>

```python
def reset_path_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference">IngressV1SpecRuleHttpPathBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.backendInput">backend_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathTypeInput">path_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathType">path_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath">IngressV1SpecRuleHttpPath</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.backend"></a>

```python
backend: IngressV1SpecRuleHttpPathBackendOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackendOutputReference">IngressV1SpecRuleHttpPathBackendOutputReference</a>

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.backendInput"></a>

```python
backend_input: IngressV1SpecRuleHttpPathBackend
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathBackend">IngressV1SpecRuleHttpPathBackend</a>

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path_type_input`<sup>Optional</sup> <a name="path_type_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathTypeInput"></a>

```python
path_type_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_type`<sup>Required</sup> <a name="path_type" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.pathType"></a>

```python
path_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPathOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IngressV1SpecRuleHttpPath]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath">IngressV1SpecRuleHttpPath</a>]

---


### IngressV1SpecRuleList <a name="IngressV1SpecRuleList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IngressV1SpecRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule">IngressV1SpecRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IngressV1SpecRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule">IngressV1SpecRule</a>]]

---


### IngressV1SpecRuleOutputReference <a name="IngressV1SpecRuleOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.putHttp">put_http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resetHttp">reset_http</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http` <a name="put_http" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.putHttp"></a>

```python
def put_http(
  path: typing.Union[IResolvable, typing.List[IngressV1SpecRuleHttpPath]]
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.putHttp.parameter.path"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpPath">IngressV1SpecRuleHttpPath</a>]]

path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/ingress_v1#path IngressV1#path}

---

##### `reset_host` <a name="reset_host" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_http` <a name="reset_http" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.resetHttp"></a>

```python
def reset_http() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference">IngressV1SpecRuleHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.httpInput">http_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule">IngressV1SpecRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.http"></a>

```python
http: IngressV1SpecRuleHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttpOutputReference">IngressV1SpecRuleHttpOutputReference</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `http_input`<sup>Optional</sup> <a name="http_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.httpInput"></a>

```python
http_input: IngressV1SpecRuleHttp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleHttp">IngressV1SpecRuleHttp</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IngressV1SpecRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecRule">IngressV1SpecRule</a>]

---


### IngressV1SpecTlsList <a name="IngressV1SpecTlsList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecTlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IngressV1SpecTlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls">IngressV1SpecTls</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IngressV1SpecTls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls">IngressV1SpecTls</a>]]

---


### IngressV1SpecTlsOutputReference <a name="IngressV1SpecTlsOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1SpecTlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resetSecretName">reset_secret_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hosts` <a name="reset_hosts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_secret_name` <a name="reset_secret_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.resetSecretName"></a>

```python
def reset_secret_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls">IngressV1SpecTls</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTlsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IngressV1SpecTls]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1SpecTls">IngressV1SpecTls</a>]

---


### IngressV1StatusList <a name="IngressV1StatusList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1StatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IngressV1StatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IngressV1StatusLoadBalancerIngressList <a name="IngressV1StatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1StatusLoadBalancerIngressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IngressV1StatusLoadBalancerIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IngressV1StatusLoadBalancerIngressOutputReference <a name="IngressV1StatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1StatusLoadBalancerIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngress">IngressV1StatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1StatusLoadBalancerIngress
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngress">IngressV1StatusLoadBalancerIngress</a>

---


### IngressV1StatusLoadBalancerList <a name="IngressV1StatusLoadBalancerList" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1StatusLoadBalancerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IngressV1StatusLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IngressV1StatusLoadBalancerOutputReference <a name="IngressV1StatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1StatusLoadBalancerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList">IngressV1StatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancer">IngressV1StatusLoadBalancer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.ingress"></a>

```python
ingress: IngressV1StatusLoadBalancerIngressList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerIngressList">IngressV1StatusLoadBalancerIngressList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1StatusLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancer">IngressV1StatusLoadBalancer</a>

---


### IngressV1StatusOutputReference <a name="IngressV1StatusOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1StatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList">IngressV1StatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Status">IngressV1Status</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.loadBalancer"></a>

```python
load_balancer: IngressV1StatusLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1StatusLoadBalancerList">IngressV1StatusLoadBalancerList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1StatusOutputReference.property.internalValue"></a>

```python
internal_value: IngressV1Status
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Status">IngressV1Status</a>

---


### IngressV1TimeoutsOutputReference <a name="IngressV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import ingress_v1

ingressV1.IngressV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.ingressV1.IngressV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IngressV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.ingressV1.IngressV1Timeouts">IngressV1Timeouts</a>]

---



