# `data_kubernetes_endpoints_v1`

Refer to the Terraform Registory for docs: [`data_kubernetes_endpoints_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1).

# `dataKubernetesEndpointsV1` Submodule <a name="`dataKubernetesEndpointsV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesEndpointsV1 <a name="DataKubernetesEndpointsV1" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1 kubernetes_endpoints_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.NewDataKubernetesEndpointsV1(scope Construct, id *string, config DataKubernetesEndpointsV1Config) DataKubernetesEndpointsV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config">DataKubernetesEndpointsV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config">DataKubernetesEndpointsV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putSubset">PutSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetSubset">ResetSubset</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata"></a>

```go
func PutMetadata(value DataKubernetesEndpointsV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

---

##### `PutSubset` <a name="PutSubset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putSubset"></a>

```go
func PutSubset(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putSubset.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetId"></a>

```go
func ResetId()
```

##### `ResetSubset` <a name="ResetSubset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetSubset"></a>

```go
func ResetSubset()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesEndpointsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.DataKubernetesEndpointsV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.DataKubernetesEndpointsV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.DataKubernetesEndpointsV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.DataKubernetesEndpointsV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataKubernetesEndpointsV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataKubernetesEndpointsV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataKubernetesEndpointsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesEndpointsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference">DataKubernetesEndpointsV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subset">Subset</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList">DataKubernetesEndpointsV1SubsetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subsetInput">SubsetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadata"></a>

```go
func Metadata() DataKubernetesEndpointsV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference">DataKubernetesEndpointsV1MetadataOutputReference</a>

---

##### `Subset`<sup>Required</sup> <a name="Subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subset"></a>

```go
func Subset() DataKubernetesEndpointsV1SubsetList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList">DataKubernetesEndpointsV1SubsetList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadataInput"></a>

```go
func MetadataInput() DataKubernetesEndpointsV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

---

##### `SubsetInput`<sup>Optional</sup> <a name="SubsetInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subsetInput"></a>

```go
func SubsetInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesEndpointsV1Config <a name="DataKubernetesEndpointsV1Config" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

&datakubernetesendpointsv1.DataKubernetesEndpointsV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata,
	Id: *string,
	Subset: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#id DataKubernetesEndpointsV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.subset">Subset</a></code> | <code>interface{}</code> | subset block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.metadata"></a>

```go
Metadata DataKubernetesEndpointsV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#metadata DataKubernetesEndpointsV1#metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#id DataKubernetesEndpointsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Subset`<sup>Optional</sup> <a name="Subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.subset"></a>

```go
Subset interface{}
```

- *Type:* interface{}

subset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#subset DataKubernetesEndpointsV1#subset}

---

### DataKubernetesEndpointsV1Metadata <a name="DataKubernetesEndpointsV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

&datakubernetesendpointsv1.DataKubernetesEndpointsV1Metadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the endpoints that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the endpoints, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace defines the space within which name of the endpoints must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the endpoints that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#annotations DataKubernetesEndpointsV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#generate_name DataKubernetesEndpointsV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoints.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#labels DataKubernetesEndpointsV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the endpoints, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#name DataKubernetesEndpointsV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace defines the space within which name of the endpoints must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#namespace DataKubernetesEndpointsV1#namespace}

---

### DataKubernetesEndpointsV1Subset <a name="DataKubernetesEndpointsV1Subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

&datakubernetesendpointsv1.DataKubernetesEndpointsV1Subset {
	Address: interface{},
	NotReadyAddress: interface{},
	Port: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.address">Address</a></code> | <code>interface{}</code> | address block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.notReadyAddress">NotReadyAddress</a></code> | <code>interface{}</code> | not_ready_address block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.port">Port</a></code> | <code>interface{}</code> | port block. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.address"></a>

```go
Address interface{}
```

- *Type:* interface{}

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#address DataKubernetesEndpointsV1#address}

---

##### `NotReadyAddress`<sup>Optional</sup> <a name="NotReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.notReadyAddress"></a>

```go
NotReadyAddress interface{}
```

- *Type:* interface{}

not_ready_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#not_ready_address DataKubernetesEndpointsV1#not_ready_address}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.port"></a>

```go
Port interface{}
```

- *Type:* interface{}

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#port DataKubernetesEndpointsV1#port}

---

### DataKubernetesEndpointsV1SubsetAddress <a name="DataKubernetesEndpointsV1SubsetAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

&datakubernetesendpointsv1.DataKubernetesEndpointsV1SubsetAddress {
	Ip: *string,
	Hostname: *string,
	NodeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.ip">Ip</a></code> | <code>*string</code> | The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.hostname">Hostname</a></code> | <code>*string</code> | The Hostname of this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.nodeName">NodeName</a></code> | <code>*string</code> | Node hosting this endpoint. This can be used to determine endpoints local to a node. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#ip DataKubernetesEndpointsV1#ip}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

The Hostname of this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#hostname DataKubernetesEndpointsV1#hostname}

---

##### `NodeName`<sup>Optional</sup> <a name="NodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.nodeName"></a>

```go
NodeName *string
```

- *Type:* *string

Node hosting this endpoint. This can be used to determine endpoints local to a node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#node_name DataKubernetesEndpointsV1#node_name}

---

### DataKubernetesEndpointsV1SubsetNotReadyAddress <a name="DataKubernetesEndpointsV1SubsetNotReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

&datakubernetesendpointsv1.DataKubernetesEndpointsV1SubsetNotReadyAddress {
	Ip: *string,
	Hostname: *string,
	NodeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.ip">Ip</a></code> | <code>*string</code> | The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.hostname">Hostname</a></code> | <code>*string</code> | The Hostname of this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.nodeName">NodeName</a></code> | <code>*string</code> | Node hosting this endpoint. This can be used to determine endpoints local to a node. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#ip DataKubernetesEndpointsV1#ip}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

The Hostname of this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#hostname DataKubernetesEndpointsV1#hostname}

---

##### `NodeName`<sup>Optional</sup> <a name="NodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.nodeName"></a>

```go
NodeName *string
```

- *Type:* *string

Node hosting this endpoint. This can be used to determine endpoints local to a node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#node_name DataKubernetesEndpointsV1#node_name}

---

### DataKubernetesEndpointsV1SubsetPort <a name="DataKubernetesEndpointsV1SubsetPort" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

&datakubernetesendpointsv1.DataKubernetesEndpointsV1SubsetPort {
	Port: *f64,
	Name: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.port">Port</a></code> | <code>*f64</code> | The port that will be exposed by this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.name">Name</a></code> | <code>*string</code> | The name of this port within the endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.protocol">Protocol</a></code> | <code>*string</code> | The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port that will be exposed by this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#port DataKubernetesEndpointsV1#port}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this port within the endpoint.

Must be a DNS_LABEL. Optional if only one Port is defined on this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#name DataKubernetesEndpointsV1#name}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/endpoints_v1#protocol DataKubernetesEndpointsV1#protocol}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesEndpointsV1MetadataOutputReference <a name="DataKubernetesEndpointsV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.NewDataKubernetesEndpointsV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataKubernetesEndpointsV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataKubernetesEndpointsV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

---


### DataKubernetesEndpointsV1SubsetAddressList <a name="DataKubernetesEndpointsV1SubsetAddressList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.NewDataKubernetesEndpointsV1SubsetAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataKubernetesEndpointsV1SubsetAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.get"></a>

```go
func Get(index *f64) DataKubernetesEndpointsV1SubsetAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesEndpointsV1SubsetAddressOutputReference <a name="DataKubernetesEndpointsV1SubsetAddressOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.NewDataKubernetesEndpointsV1SubsetAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataKubernetesEndpointsV1SubsetAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetNodeName">ResetNodeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetNodeName` <a name="ResetNodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetNodeName"></a>

```go
func ResetNodeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeNameInput">NodeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeName">NodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `NodeNameInput`<sup>Optional</sup> <a name="NodeNameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeNameInput"></a>

```go
func NodeNameInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeName"></a>

```go
func NodeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesEndpointsV1SubsetList <a name="DataKubernetesEndpointsV1SubsetList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.NewDataKubernetesEndpointsV1SubsetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataKubernetesEndpointsV1SubsetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.get"></a>

```go
func Get(index *f64) DataKubernetesEndpointsV1SubsetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesEndpointsV1SubsetNotReadyAddressList <a name="DataKubernetesEndpointsV1SubsetNotReadyAddressList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.NewDataKubernetesEndpointsV1SubsetNotReadyAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataKubernetesEndpointsV1SubsetNotReadyAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.get"></a>

```go
func Get(index *f64) DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference <a name="DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.NewDataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetNodeName">ResetNodeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetNodeName` <a name="ResetNodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetNodeName"></a>

```go
func ResetNodeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeNameInput">NodeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeName">NodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `NodeNameInput`<sup>Optional</sup> <a name="NodeNameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeNameInput"></a>

```go
func NodeNameInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeName"></a>

```go
func NodeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesEndpointsV1SubsetOutputReference <a name="DataKubernetesEndpointsV1SubsetOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.NewDataKubernetesEndpointsV1SubsetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataKubernetesEndpointsV1SubsetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putAddress">PutAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putNotReadyAddress">PutNotReadyAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putPort">PutPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetNotReadyAddress">ResetNotReadyAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddress` <a name="PutAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putAddress"></a>

```go
func PutAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNotReadyAddress` <a name="PutNotReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putNotReadyAddress"></a>

```go
func PutNotReadyAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putNotReadyAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPort` <a name="PutPort" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putPort"></a>

```go
func PutPort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putPort.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetNotReadyAddress` <a name="ResetNotReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetNotReadyAddress"></a>

```go
func ResetNotReadyAddress()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.address">Address</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList">DataKubernetesEndpointsV1SubsetAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddress">NotReadyAddress</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList">DataKubernetesEndpointsV1SubsetNotReadyAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList">DataKubernetesEndpointsV1SubsetPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.addressInput">AddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddressInput">NotReadyAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.portInput">PortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.address"></a>

```go
func Address() DataKubernetesEndpointsV1SubsetAddressList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList">DataKubernetesEndpointsV1SubsetAddressList</a>

---

##### `NotReadyAddress`<sup>Required</sup> <a name="NotReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddress"></a>

```go
func NotReadyAddress() DataKubernetesEndpointsV1SubsetNotReadyAddressList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList">DataKubernetesEndpointsV1SubsetNotReadyAddressList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.port"></a>

```go
func Port() DataKubernetesEndpointsV1SubsetPortList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList">DataKubernetesEndpointsV1SubsetPortList</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.addressInput"></a>

```go
func AddressInput() interface{}
```

- *Type:* interface{}

---

##### `NotReadyAddressInput`<sup>Optional</sup> <a name="NotReadyAddressInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddressInput"></a>

```go
func NotReadyAddressInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.portInput"></a>

```go
func PortInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesEndpointsV1SubsetPortList <a name="DataKubernetesEndpointsV1SubsetPortList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.NewDataKubernetesEndpointsV1SubsetPortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataKubernetesEndpointsV1SubsetPortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.get"></a>

```go
func Get(index *f64) DataKubernetesEndpointsV1SubsetPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataKubernetesEndpointsV1SubsetPortOutputReference <a name="DataKubernetesEndpointsV1SubsetPortOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/datakubernetesendpointsv1"

datakubernetesendpointsv1.NewDataKubernetesEndpointsV1SubsetPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataKubernetesEndpointsV1SubsetPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



