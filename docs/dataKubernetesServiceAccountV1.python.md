# `dataKubernetesServiceAccountV1` Submodule <a name="`dataKubernetesServiceAccountV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesServiceAccountV1 <a name="DataKubernetesServiceAccountV1" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1 kubernetes_service_account_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: DataKubernetesServiceAccountV1Metadata,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata">DataKubernetesServiceAccountV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#id DataKubernetesServiceAccountV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata">DataKubernetesServiceAccountV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#metadata DataKubernetesServiceAccountV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#id DataKubernetesServiceAccountV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the service account that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#annotations DataKubernetesServiceAccountV1#annotations}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the service account.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#labels DataKubernetesServiceAccountV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the service account, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#name DataKubernetesServiceAccountV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the service account must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#namespace DataKubernetesServiceAccountV1#namespace}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataKubernetesServiceAccountV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataKubernetesServiceAccountV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataKubernetesServiceAccountV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataKubernetesServiceAccountV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesServiceAccountV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.automountServiceAccountToken">automount_service_account_token</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.defaultSecretName">default_secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.imagePullSecret">image_pull_secret</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList">DataKubernetesServiceAccountV1ImagePullSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference">DataKubernetesServiceAccountV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList">DataKubernetesServiceAccountV1SecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata">DataKubernetesServiceAccountV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `automount_service_account_token`<sup>Required</sup> <a name="automount_service_account_token" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.automountServiceAccountToken"></a>

```python
automount_service_account_token: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `default_secret_name`<sup>Required</sup> <a name="default_secret_name" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.defaultSecretName"></a>

```python
default_secret_name: str
```

- *Type:* str

---

##### `image_pull_secret`<sup>Required</sup> <a name="image_pull_secret" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.imagePullSecret"></a>

```python
image_pull_secret: DataKubernetesServiceAccountV1ImagePullSecretList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList">DataKubernetesServiceAccountV1ImagePullSecretList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.metadata"></a>

```python
metadata: DataKubernetesServiceAccountV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference">DataKubernetesServiceAccountV1MetadataOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.secret"></a>

```python
secret: DataKubernetesServiceAccountV1SecretList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList">DataKubernetesServiceAccountV1SecretList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.metadataInput"></a>

```python
metadata_input: DataKubernetesServiceAccountV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata">DataKubernetesServiceAccountV1Metadata</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesServiceAccountV1Config <a name="DataKubernetesServiceAccountV1Config" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: DataKubernetesServiceAccountV1Metadata,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata">DataKubernetesServiceAccountV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#id DataKubernetesServiceAccountV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.metadata"></a>

```python
metadata: DataKubernetesServiceAccountV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata">DataKubernetesServiceAccountV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#metadata DataKubernetesServiceAccountV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#id DataKubernetesServiceAccountV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataKubernetesServiceAccountV1ImagePullSecret <a name="DataKubernetesServiceAccountV1ImagePullSecret" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecret()
```


### DataKubernetesServiceAccountV1Metadata <a name="DataKubernetesServiceAccountV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata(
  annotations: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the service account that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service account. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the service account, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the service account must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the service account that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#annotations DataKubernetesServiceAccountV1#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the service account.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#labels DataKubernetesServiceAccountV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the service account, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#name DataKubernetesServiceAccountV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the service account must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service_account_v1#namespace DataKubernetesServiceAccountV1#namespace}

---

### DataKubernetesServiceAccountV1Secret <a name="DataKubernetesServiceAccountV1Secret" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Secret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Secret.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Secret()
```


## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesServiceAccountV1ImagePullSecretList <a name="DataKubernetesServiceAccountV1ImagePullSecretList" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesServiceAccountV1ImagePullSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataKubernetesServiceAccountV1ImagePullSecretOutputReference <a name="DataKubernetesServiceAccountV1ImagePullSecretOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecret">DataKubernetesServiceAccountV1ImagePullSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecretOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesServiceAccountV1ImagePullSecret
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1ImagePullSecret">DataKubernetesServiceAccountV1ImagePullSecret</a>

---


### DataKubernetesServiceAccountV1MetadataOutputReference <a name="DataKubernetesServiceAccountV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata">DataKubernetesServiceAccountV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesServiceAccountV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Metadata">DataKubernetesServiceAccountV1Metadata</a>

---


### DataKubernetesServiceAccountV1SecretList <a name="DataKubernetesServiceAccountV1SecretList" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesServiceAccountV1SecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataKubernetesServiceAccountV1SecretOutputReference <a name="DataKubernetesServiceAccountV1SecretOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_service_account_v1

dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Secret">DataKubernetesServiceAccountV1Secret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1SecretOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesServiceAccountV1Secret
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesServiceAccountV1.DataKubernetesServiceAccountV1Secret">DataKubernetesServiceAccountV1Secret</a>

---



