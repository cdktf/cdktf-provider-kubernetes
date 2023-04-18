# `data_kubernetes_ingress_v1`

Refer to the Terraform Registory for docs: [`data_kubernetes_ingress_v1`](https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1).

# `dataKubernetesIngressV1` Submodule <a name="`dataKubernetesIngressV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesIngressV1 <a name="DataKubernetesIngressV1" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1 kubernetes_ingress_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1(Construct Scope, string Id, DataKubernetesIngressV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config">DataKubernetesIngressV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config">DataKubernetesIngressV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.putMetadata"></a>

```csharp
private void PutMetadata(DataKubernetesIngressV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata">DataKubernetesIngressV1Metadata</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesIngressV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesIngressV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesIngressV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference">DataKubernetesIngressV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList">DataKubernetesIngressV1SpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.status">Status</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList">DataKubernetesIngressV1StatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata">DataKubernetesIngressV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.metadata"></a>

```csharp
public DataKubernetesIngressV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference">DataKubernetesIngressV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.spec"></a>

```csharp
public DataKubernetesIngressV1SpecList Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList">DataKubernetesIngressV1SpecList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.status"></a>

```csharp
public DataKubernetesIngressV1StatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList">DataKubernetesIngressV1StatusList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.metadataInput"></a>

```csharp
public DataKubernetesIngressV1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata">DataKubernetesIngressV1Metadata</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesIngressV1Config <a name="DataKubernetesIngressV1Config" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataKubernetesIngressV1Metadata Metadata,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata">DataKubernetesIngressV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1#id DataKubernetesIngressV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.metadata"></a>

```csharp
public DataKubernetesIngressV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata">DataKubernetesIngressV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1#metadata DataKubernetesIngressV1#metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1#id DataKubernetesIngressV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataKubernetesIngressV1Metadata <a name="DataKubernetesIngressV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the ingress must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the ingress that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1#annotations DataKubernetesIngressV1#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the ingress.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1#labels DataKubernetesIngressV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1#name DataKubernetesIngressV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the ingress must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1#namespace DataKubernetesIngressV1#namespace}

---

### DataKubernetesIngressV1Spec <a name="DataKubernetesIngressV1Spec" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Spec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1Spec {

};
```


### DataKubernetesIngressV1SpecDefaultBackend <a name="DataKubernetesIngressV1SpecDefaultBackend" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackend {

};
```


### DataKubernetesIngressV1SpecDefaultBackendResource <a name="DataKubernetesIngressV1SpecDefaultBackendResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendResource {

};
```


### DataKubernetesIngressV1SpecDefaultBackendService <a name="DataKubernetesIngressV1SpecDefaultBackendService" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendService {

};
```


### DataKubernetesIngressV1SpecDefaultBackendServicePort <a name="DataKubernetesIngressV1SpecDefaultBackendServicePort" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendServicePort {

};
```


### DataKubernetesIngressV1SpecRule <a name="DataKubernetesIngressV1SpecRule" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRule {

};
```


### DataKubernetesIngressV1SpecRuleHttp <a name="DataKubernetesIngressV1SpecRuleHttp" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttp {

};
```


### DataKubernetesIngressV1SpecRuleHttpPath <a name="DataKubernetesIngressV1SpecRuleHttpPath" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPath {

};
```


### DataKubernetesIngressV1SpecRuleHttpPathBackend <a name="DataKubernetesIngressV1SpecRuleHttpPathBackend" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackend {

};
```


### DataKubernetesIngressV1SpecRuleHttpPathBackendResource <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendResource {

};
```


### DataKubernetesIngressV1SpecRuleHttpPathBackendService <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendService" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendService {

};
```


### DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort {

};
```


### DataKubernetesIngressV1SpecTls <a name="DataKubernetesIngressV1SpecTls" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecTls {

};
```


### DataKubernetesIngressV1Status <a name="DataKubernetesIngressV1Status" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Status"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Status.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1Status {

};
```


### DataKubernetesIngressV1StatusLoadBalancer <a name="DataKubernetesIngressV1StatusLoadBalancer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1StatusLoadBalancer {

};
```


### DataKubernetesIngressV1StatusLoadBalancerIngress <a name="DataKubernetesIngressV1StatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1StatusLoadBalancerIngress {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesIngressV1MetadataOutputReference <a name="DataKubernetesIngressV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata">DataKubernetesIngressV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1MetadataOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Metadata">DataKubernetesIngressV1Metadata</a>

---


### DataKubernetesIngressV1SpecDefaultBackendList <a name="DataKubernetesIngressV1SpecDefaultBackendList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.get"></a>

```csharp
private DataKubernetesIngressV1SpecDefaultBackendOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecDefaultBackendOutputReference <a name="DataKubernetesIngressV1SpecDefaultBackendOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList">DataKubernetesIngressV1SpecDefaultBackendResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList">DataKubernetesIngressV1SpecDefaultBackendServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackend">DataKubernetesIngressV1SpecDefaultBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.property.resource"></a>

```csharp
public DataKubernetesIngressV1SpecDefaultBackendResourceList Resource { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList">DataKubernetesIngressV1SpecDefaultBackendResourceList</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.property.service"></a>

```csharp
public DataKubernetesIngressV1SpecDefaultBackendServiceList Service { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList">DataKubernetesIngressV1SpecDefaultBackendServiceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecDefaultBackend InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackend">DataKubernetesIngressV1SpecDefaultBackend</a>

---


### DataKubernetesIngressV1SpecDefaultBackendResourceList <a name="DataKubernetesIngressV1SpecDefaultBackendResourceList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.get"></a>

```csharp
private DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference <a name="DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.apiGroup">ApiGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResource">DataKubernetesIngressV1SpecDefaultBackendResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.apiGroup"></a>

```csharp
public string ApiGroup { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResourceOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecDefaultBackendResource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendResource">DataKubernetesIngressV1SpecDefaultBackendResource</a>

---


### DataKubernetesIngressV1SpecDefaultBackendServiceList <a name="DataKubernetesIngressV1SpecDefaultBackendServiceList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendServiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.get"></a>

```csharp
private DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference <a name="DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList">DataKubernetesIngressV1SpecDefaultBackendServicePortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendService">DataKubernetesIngressV1SpecDefaultBackendService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.property.port"></a>

```csharp
public DataKubernetesIngressV1SpecDefaultBackendServicePortList Port { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList">DataKubernetesIngressV1SpecDefaultBackendServicePortList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServiceOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecDefaultBackendService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendService">DataKubernetesIngressV1SpecDefaultBackendService</a>

---


### DataKubernetesIngressV1SpecDefaultBackendServicePortList <a name="DataKubernetesIngressV1SpecDefaultBackendServicePortList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendServicePortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.get"></a>

```csharp
private DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference <a name="DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePort">DataKubernetesIngressV1SpecDefaultBackendServicePort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePortOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecDefaultBackendServicePort InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendServicePort">DataKubernetesIngressV1SpecDefaultBackendServicePort</a>

---


### DataKubernetesIngressV1SpecList <a name="DataKubernetesIngressV1SpecList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.get"></a>

```csharp
private DataKubernetesIngressV1SpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecOutputReference <a name="DataKubernetesIngressV1SpecOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.defaultBackend">DefaultBackend</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList">DataKubernetesIngressV1SpecDefaultBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.ingressClassName">IngressClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList">DataKubernetesIngressV1SpecRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList">DataKubernetesIngressV1SpecTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Spec">DataKubernetesIngressV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultBackend`<sup>Required</sup> <a name="DefaultBackend" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.defaultBackend"></a>

```csharp
public DataKubernetesIngressV1SpecDefaultBackendList DefaultBackend { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecDefaultBackendList">DataKubernetesIngressV1SpecDefaultBackendList</a>

---

##### `IngressClassName`<sup>Required</sup> <a name="IngressClassName" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.ingressClassName"></a>

```csharp
public string IngressClassName { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.rule"></a>

```csharp
public DataKubernetesIngressV1SpecRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList">DataKubernetesIngressV1SpecRuleList</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.tls"></a>

```csharp
public DataKubernetesIngressV1SpecTlsList Tls { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList">DataKubernetesIngressV1SpecTlsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1Spec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Spec">DataKubernetesIngressV1Spec</a>

---


### DataKubernetesIngressV1SpecRuleHttpList <a name="DataKubernetesIngressV1SpecRuleHttpList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.get"></a>

```csharp
private DataKubernetesIngressV1SpecRuleHttpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecRuleHttpOutputReference <a name="DataKubernetesIngressV1SpecRuleHttpOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList">DataKubernetesIngressV1SpecRuleHttpPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttp">DataKubernetesIngressV1SpecRuleHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.property.path"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpPathList Path { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList">DataKubernetesIngressV1SpecRuleHttpPathList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttp">DataKubernetesIngressV1SpecRuleHttp</a>

---


### DataKubernetesIngressV1SpecRuleHttpPathBackendList <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.get"></a>

```csharp
private DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList">DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList">DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackend">DataKubernetesIngressV1SpecRuleHttpPathBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.property.resource"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList Resource { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList">DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.property.service"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList Service { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList">DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpPathBackend InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackend">DataKubernetesIngressV1SpecRuleHttpPathBackend</a>

---


### DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.get"></a>

```csharp
private DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.apiGroup">ApiGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResource">DataKubernetesIngressV1SpecRuleHttpPathBackendResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.apiGroup"></a>

```csharp
public string ApiGroup { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResourceOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpPathBackendResource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendResource">DataKubernetesIngressV1SpecRuleHttpPathBackendResource</a>

---


### DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.get"></a>

```csharp
private DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList">DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendService">DataKubernetesIngressV1SpecRuleHttpPathBackendService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.property.port"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList Port { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList">DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServiceOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpPathBackendService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendService">DataKubernetesIngressV1SpecRuleHttpPathBackendService</a>

---


### DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.get"></a>

```csharp
private DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference <a name="DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort">DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePortOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort">DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort</a>

---


### DataKubernetesIngressV1SpecRuleHttpPathList <a name="DataKubernetesIngressV1SpecRuleHttpPathList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.get"></a>

```csharp
private DataKubernetesIngressV1SpecRuleHttpPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecRuleHttpPathOutputReference <a name="DataKubernetesIngressV1SpecRuleHttpPathOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleHttpPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList">DataKubernetesIngressV1SpecRuleHttpPathBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.pathType">PathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPath">DataKubernetesIngressV1SpecRuleHttpPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.backend"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpPathBackendList Backend { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathBackendList">DataKubernetesIngressV1SpecRuleHttpPathBackendList</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.pathType"></a>

```csharp
public string PathType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPathOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpPath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpPath">DataKubernetesIngressV1SpecRuleHttpPath</a>

---


### DataKubernetesIngressV1SpecRuleList <a name="DataKubernetesIngressV1SpecRuleList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.get"></a>

```csharp
private DataKubernetesIngressV1SpecRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecRuleOutputReference <a name="DataKubernetesIngressV1SpecRuleOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList">DataKubernetesIngressV1SpecRuleHttpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRule">DataKubernetesIngressV1SpecRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.property.http"></a>

```csharp
public DataKubernetesIngressV1SpecRuleHttpList Http { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleHttpList">DataKubernetesIngressV1SpecRuleHttpList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRuleOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecRule">DataKubernetesIngressV1SpecRule</a>

---


### DataKubernetesIngressV1SpecTlsList <a name="DataKubernetesIngressV1SpecTlsList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecTlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.get"></a>

```csharp
private DataKubernetesIngressV1SpecTlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1SpecTlsOutputReference <a name="DataKubernetesIngressV1SpecTlsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1SpecTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTls">DataKubernetesIngressV1SpecTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTlsOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1SpecTls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1SpecTls">DataKubernetesIngressV1SpecTls</a>

---


### DataKubernetesIngressV1StatusList <a name="DataKubernetesIngressV1StatusList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1StatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.get"></a>

```csharp
private DataKubernetesIngressV1StatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1StatusLoadBalancerIngressList <a name="DataKubernetesIngressV1StatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1StatusLoadBalancerIngressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.get"></a>

```csharp
private DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference <a name="DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngress">DataKubernetesIngressV1StatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1StatusLoadBalancerIngress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngress">DataKubernetesIngressV1StatusLoadBalancerIngress</a>

---


### DataKubernetesIngressV1StatusLoadBalancerList <a name="DataKubernetesIngressV1StatusLoadBalancerList" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1StatusLoadBalancerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.get"></a>

```csharp
private DataKubernetesIngressV1StatusLoadBalancerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesIngressV1StatusLoadBalancerOutputReference <a name="DataKubernetesIngressV1StatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1StatusLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList">DataKubernetesIngressV1StatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancer">DataKubernetesIngressV1StatusLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.property.ingress"></a>

```csharp
public DataKubernetesIngressV1StatusLoadBalancerIngressList Ingress { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerIngressList">DataKubernetesIngressV1StatusLoadBalancerIngressList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1StatusLoadBalancer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancer">DataKubernetesIngressV1StatusLoadBalancer</a>

---


### DataKubernetesIngressV1StatusOutputReference <a name="DataKubernetesIngressV1StatusOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesIngressV1StatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList">DataKubernetesIngressV1StatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Status">DataKubernetesIngressV1Status</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.property.loadBalancer"></a>

```csharp
public DataKubernetesIngressV1StatusLoadBalancerList LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusLoadBalancerList">DataKubernetesIngressV1StatusLoadBalancerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1StatusOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesIngressV1Status InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesIngressV1.DataKubernetesIngressV1Status">DataKubernetesIngressV1Status</a>

---



